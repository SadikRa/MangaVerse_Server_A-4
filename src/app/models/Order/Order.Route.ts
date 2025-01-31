import express from 'express';
import { OrderControllers } from './Order.Controllers';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../users/User.Constant';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidationSchema } from './Order.Validation';

const router = express.Router();

//order a book
router.post(
  '/orders',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(OrderValidationSchema.CreateOrderValidationSchema),
  OrderControllers.OrderABook,
);

//get all order
router.get('/orders', auth(USER_ROLE.admin), OrderControllers.getAllOrders);

///get single order by id
router.get(
  '/orders/:id',
  auth(USER_ROLE.admin),
  OrderControllers.getSingleOrderById,
);

//change status
router.patch(
  '/orders/change-status',
  auth(USER_ROLE.admin),
  OrderControllers.changeOrderStatus,
);

//delete order
router.delete(
  '/orders/:id',
  auth(USER_ROLE.admin),
  OrderControllers.deleteOrder,
);

// calculate revenue orders
router.get('/orders/revenue', OrderControllers.CalculateRevenueOrders);

export const OrderRoutes = router;
