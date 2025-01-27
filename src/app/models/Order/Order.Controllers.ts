import { Request, Response } from 'express';
import { orderValidationSchema } from './orderValidation';
import { OrderServices } from './Order.Services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

// Order a book
const OrderABook = catchAsync(async (req, res) => {
  // Validate request body
  const { error } = orderValidationSchema.validate(req.body);
  if (error) {
    return sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: 'Validation failed',
      data: error.details,
    });
  }

  const orderData = req.body;
  const result = await OrderServices.OrderABook(orderData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order created successfully',
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
};
