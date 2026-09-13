import { StatusCodes } from 'http-status-codes';
import {
  NotFoundError,
  UnauthorizedError,
  verifyToken,
} from '../utils/index.js';

const authMiddleware = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    throw new UnauthorizedError('Invalid or Expire Token');
  }

  try {
    const payload = verifyToken(token);
    req.user = { id: payload.id, role: payload.role };
  } catch {
    throw new UnauthorizedError('Invalid or expired token');
  }
  next();
};

export default authMiddleware;
