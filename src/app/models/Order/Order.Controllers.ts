import { OrderServices } from './Order.Services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';

// Order a book
const OrderABook = catchAsync(async (req, res) => {
  const order = req.body;
  const user = req.user;
  const result = await OrderServices.OrderABook(order, user);

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

///get single order my id

const getAOrderById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.getAOrderById(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order retrieved successfully',
    data: result,
  });
});

///get single order my email
const getOrderByEmail = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await OrderServices.getOrderByEmail(email);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order retrieved successfully',
    data: result,
  });
});

///change status
const updateOrderStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const result = await OrderServices.updateOrderStatus(id, status);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Order status changed successfully",
    data: result,
  });
});

//delete order
const deleteOrder = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Order ID is required');
  }

  const result = await OrderServices.deleteOrder(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order deleted successfully',
    data: result,
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
  getOrderByEmail,
  deleteOrder,
  updateOrderStatus,
  getAOrderById,
};
