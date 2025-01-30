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

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

export const AuthRouters = router;
