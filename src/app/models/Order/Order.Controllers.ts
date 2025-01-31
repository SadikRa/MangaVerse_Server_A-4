import { OrderServices } from './Order.Services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

// Order a book
const OrderABook = catchAsync(async (req, res) => {
  const orderData = req.body;
  const result = await OrderServices.OrderABook(orderData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

///get all order
const getAllOrders = catchAsync(async (req, res) => {
  const orders = req?.query;
  const result = await OrderServices.getAllOrder(orders);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

///get single order
const getSingleOrderById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const order = await OrderServices.getSingleOrderById(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order retrieved successfully',
    data: order,
  });
});

// Calculate revenue from orders
const CalculateRevenueOrders = catchAsync(async (req, res) => {
  const totalRevenue = await OrderServices.CalculateRevenueOrders();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Revenue calculated successfully',
    data: { totalRevenue },
  });
});

export const OrderControllers = {
  OrderABook,
  CalculateRevenueOrders,
  getAllOrders,
  getSingleOrderById,
};
