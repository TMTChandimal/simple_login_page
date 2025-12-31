import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import authenticateJWT from '../middleware/authenticateJWT.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);


router.get('/dashboard', authenticateJWT, (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    user: req.user
  });
});

export default router;
