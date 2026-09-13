import { StatusCodes } from 'http-status-codes';
import { loginUser } from '../service/index.js';
import { UnauthenticatedError } from '../utils/index.js';

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new UnauthenticatedError('Please provide email and password');
    }

    const { user, token } = await loginUser(email, password);
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'loggedIn successfully',
      user: { username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    next(error);
  }
};
const logout = async (req, res) => {
  res.json('logout');
};
const getUser = async (req, res) => {
  res.json('getUser');
};

export { login, logout, getUser };
