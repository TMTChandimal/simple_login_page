import bcrypt from 'bcrypt';
import User from '../models/User.js';

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
      return res.status(404).json("email not found");
    }

    const isMatch = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json("Password is incorrect");
    }

    res.json("Login successful");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
