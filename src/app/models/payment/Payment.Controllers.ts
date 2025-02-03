// Payment.Controller.ts
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { paymentService } from './Payment.Services';

const createPaymentIntent = catchAsync(async (req, res) => {
  const user = req.user;
  const order = await paymentService.createPaymentIntent(
    user,
    req.body,
    req.ip!,
  );

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Payment intent created successfully',
    data: order,
  });
});

const verifyPayment = catchAsync(async (req, res) => {
  const order = await paymentService.verifyPayment(
    req.query.order_id as string,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Payment verified successfully',
    data: order,
  });
});

const getAllPayments = catchAsync(async (req, res) => {
  const payments = await paymentService.getAllPayments(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Payments retrieved successfully',
    data: payments,
  });
});

export const paymentController = {
  createPaymentIntent,
  verifyPayment,
  getAllPayments,
};
