import UserModel from '../models/user.model.js';
import { comparePassword, UnauthenticatedError } from '../utils/index.js';
import { UnauthorizedError, createToken } from '../utils/index.js';
import jwt from 'jsonwebtoken';

const loginUser = async (email, password) => {
  const user = await UserModel.findOne({ email }).select('+password');

  if (!user) {
    throw new UnauthorizedError('Invalid Credentials');
  }

  const verifyPassword = comparePassword(password, user.password);

  if (!verifyPassword) {
    throw new UnauthenticatedError('password do no match');
  }

  const userTokenData = {
    id: user._id,
    role: user.role,
  };

  const token = createToken(userTokenData)

  await user.save();
  return { user, token };
};

export { loginUser };
