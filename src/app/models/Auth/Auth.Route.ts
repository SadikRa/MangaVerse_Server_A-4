import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './Auth.Validation';

const router = express.Router();

router.post(
  '/login',

  validateRequest(AuthValidation.loginValidationSchema),
);

export const AuthRouters = router;
