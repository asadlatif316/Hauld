import { login } from '../controller/auth.controller.js';
import User from '../models/user.model.js';
import UserModel from '../models/user.model.js';
import {
  comparePassword,
  UnauthenticatedError,
} from '../utils/index.js';
import { UnauthorizedError } from '../utils/index.js';
import jwt from 'jsonwebtoken';

const loginUser = async (userData) => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    new UnauthorizedError('Invalid Credentials');
  }

  const verifyPassword = comparePassword(userData.password, user.password);

  if (!verifyPassword) {
    new UnauthenticatedError('password do no match');
  }

  const userTokenData = {
    id: user._id,
    role: user.role,
  };

  const token = jwt.sign(userTokenData, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  await user.save();
  return { user, token };
};

export {loginUser}