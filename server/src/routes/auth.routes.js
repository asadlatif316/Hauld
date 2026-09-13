import express from 'express';
import { login, logout, getUser } from '../controller/index.js';
const router = express.Router();
import { authMiddleware } from '../middlewares/index.js';

router.post('/login',  login);
router.post('/logout', logout);
router.get('/user/me',authMiddleware, getUser);

const authRouter = router;

export default authRouter;
