import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './User.Services';

const createUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = UserService.createUserIntoDB(user);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'user Created done',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
