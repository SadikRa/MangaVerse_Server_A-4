import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './User.Services';

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  console.log(userData);

  const result = await UserService.createUserIntoDB(userData);

  console.log(result);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
