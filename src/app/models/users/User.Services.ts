import { TUser } from './User.Interface';
import { UserModel } from './User.Model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  return result;
};

export const UserService = {
  createUserIntoDB,
};
