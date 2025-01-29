import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { UserModel } from '../users/User.Model';
import { TLoginUser } from './Auth.Interface';

const loginUser = async (payload: TLoginUser) => {
  // Check if the payload contains the required fields
  if (!payload?.email || !payload?.password) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'Email and password are required',
    );
  }

  // Check if the user exists
  const user = await UserModel.isUserExistsByEmail(payload.email);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  // Check if the user is deleted
  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is deleted');
  }

  // Check if the user is blocked
  const isBlocked = user?.isBlocked;
  if (isBlocked) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked');
  }

  // Check if the password matches
  if (!(await UserModel.isUserPasswordMatch(payload?.password, user?.password))) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Invalid password');
  }

  // If everything is fine, return a success response or token
  return {};
};

export const AuthServices = {
  loginUser,
};
