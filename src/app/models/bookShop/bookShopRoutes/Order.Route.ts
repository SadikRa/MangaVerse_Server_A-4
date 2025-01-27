import express from 'express';
import { OrderControllers } from '../bookShopControllers/Order.Controllers';

const router = express.Router();

//order a book 
router.post('/orders', OrderControllers.OrderABook);

// calculate revenue orders
router.get('/orders/revenue', OrderControllers.CalculateRevenueOrders);


export const OrderRoutes = router;