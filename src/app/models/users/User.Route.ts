import express from 'express';
import { UserControllers } from './User.Controllers';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './User.Validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './User.Constant';

const router = express.Router();

router.post(
  '/create-user',

  validateRequest(UserValidation.userValidationSchema),

  UserControllers.createUser,
);

router.get('/', auth(USER_ROLE.admin), UserControllers.getAllUsers);

export const UserRouters = router;
