import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './Auth.Validation';
import { AuthControllers } from './Auth.Controller';

const router = express.Router();

router.post(
  '/login',

  validateRequest(AuthValidation.loginValidationSchema),

  AuthControllers.loginUser,
);

export const AuthRouters = router;
