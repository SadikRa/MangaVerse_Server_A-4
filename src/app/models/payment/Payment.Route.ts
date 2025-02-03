import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../users/User.Constant';
import { paymentController } from './Payment.Controllers';

const router = express.Router();

router.post('/intent/:order_id', auth(USER_ROLE.admin, USER_ROLE.user), paymentController.createPaymentIntent);
router.post('/ipn_listener', paymentController.verifyPayment);
router.get('/', auth(USER_ROLE.admin), paymentController.getAllPayments);

export const PaymentRoutes = router;