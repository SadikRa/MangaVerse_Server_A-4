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
  const { id } = req.params;
  const result = await ProductServices.getABookFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

// Update a book
const UpdateABook = catchAsync(async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  const result = await ProductServices.UpdateABook(id, book);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});

// Delete a book
const deleteABook = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ProductServices.deleteABook(id);

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
