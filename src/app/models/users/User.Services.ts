import { StatusCodes } from 'http-status-codes';
import { TUser } from './User.Interface';
import { UserModel } from './User.Model';
import AppError from '../../errors/AppError';

const createUserIntoDB = async (user: TUser) => {
  // Check if user already exists
  const existingUser = await UserModel.findOne({ email: user.email });

  if (existingUser) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'A user with this email already exists.'
    );
  }

  // Create and return the new user
  return await UserModel.create(user);
};

export const UserService = { createUserIntoDB };
