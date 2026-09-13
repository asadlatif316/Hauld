import { StatusCodes } from 'http-status-codes';
import { loginUser,getUserData } from '../service/index.js';
import { setCookie, UnauthenticatedError } from '../utils/index.js';

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new UnauthenticatedError('Please provide email and password');
    }

    const { user, token } = await loginUser(email, password);
    setCookie(res, token);
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
const getUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await getUserData(id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'User found',
      user,
    });
  } catch (error) {
    next(error);
  }
};

export { login, logout, getUser };
