import { TUser } from './User.Interface';
import { UserModel } from './User.Model';

const createUserIntoDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

export const UserService = {
  createUserIntoDB,
};
