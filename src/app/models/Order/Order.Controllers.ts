import { OrderServices } from './Order.Services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

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

///get single order
const getSingleOrderById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.getSingleOrderById(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order retrieved successfully',
    data: result,
  });
});

///change status
const changeOrderStatus = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const { status } = req.body;
  const result = await OrderServices.changeOrderStatus(_id, status);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order status change successfully',
    data: result,
  });
});

//delete order
const deleteOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.deleteOrder(req.params?.id);

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
  getSingleOrderById,
  deleteOrder,
  changeOrderStatus,
};
