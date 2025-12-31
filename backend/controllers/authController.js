import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    res.json("User registered successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email }
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token: token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
