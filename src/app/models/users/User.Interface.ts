import { USER_ROLE } from './User.Constant';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  isBlocked: boolean;
  isDeleted: boolean;
};

export type TUserRole = keyof typeof USER_ROLE;
