import express from 'express';
import { UserControllers } from './User.Controllers';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './User.Validation';

const router = express.Router();

router.post(
  '/create-user',

  validateRequest(UserValidation.userValidationSchema),

  UserControllers.createUser,
);

export const UserRouters = router;
