import Joi from 'joi';
import { ProductServices } from './Product.Services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

// Create a book
const createBook = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await ProductServices.createBookIntoDB(productData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Book is created successfully',
    data: result,
  });
});

// Get all books
const GetAllBook = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllBooksFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Books retrieved successfully',
    data: result,
  });
});

// Get a single book
const GetABook = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.getABookFromDB(productId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

// Update a book
const UpdateABook = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const book = req.body;
  const result = await ProductServices.UpdateABook(productId, book);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});

// Delete a book
const idValidationSchema = Joi.string().required();
const deleteABook = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const { error } = idValidationSchema.validate(productId);
  if (error) {
    return sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: 'Validation failed',
      data: error.details,
    });
  }

  const result = await ProductServices.deleteABook(productId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  });
});

export const productControllers = {
  createBook,
  GetAllBook,
  GetABook,
  UpdateABook,
  deleteABook,
};
