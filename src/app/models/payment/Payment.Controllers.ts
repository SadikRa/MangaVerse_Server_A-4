import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { paymentService } from './Payment.Services';
import { TUser } from '../users/User.Interface';

const createPaymentIntent = catchAsync(async (req, res) => {
  const user = req.user as TUser;
  const { id } = req.params;
  const payment = await paymentService.createPaymentIntent(user, id, req.ip!);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Payment intent created successfully',
    data: payment,
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
  getAllPayments,
};
