import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { UserModel } from '../users/User.Model';
import { TLoginUser } from './Auth.Interface';
import bcrypt from 'bcrypt';

const loginUser = async (payload: TLoginUser) => {
  // Check if the payload contains the required fields
  if (!payload?.email || !payload?.password) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Email and password are required');
  }

  // Check if the user exists
  // const isUserExists = await UserModel.findOne({ email: payload.email }).select('+password');


  if (! await UserModel.isUserExistsByEmail(payload.email)) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  // Check if the user is deleted
  if (await UserModel.isUserExistsByEmail) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is deleted');
  }

  // Check if the user is blocked
  if (await UserModel.isUserExistsByEmail.isBlocked) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked');
  }

  // Check if the password matches
  if (!(await UserModel.isUserPasswordMatch(payload.password, user.password))) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Invalid password');
  }

  const isPasswordMatch = await bcrypt.compare(payload.password, isUserExists.password);
  console.log(isPasswordMatch);
  if (!isPasswordMatch) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Incorrect password');
  }

  // If everything is fine, return a success response or token
  return {
    success: true,
    message: 'Login successful',
    data: {
      userId: isUserExists._id,
      email: isUserExists.email,
      role: isUserExists.role,
    },
  };
};

export const AuthServices = {
  loginUser,
};