import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { productSearchAbleFields } from './Product.Constant';
import { Product } from './Product.Interface';
import { ProductModel } from './Product.Model';

// create a book
const createBookIntoDB = async (book: Product) => {
  const result = await ProductModel.create(book);
  return result;
};

/// get all book
const getAllBooksFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(
    ProductModel.find({ isDeleted: false }).populate('author'),
    query,
  )
    .search(productSearchAbleFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();
  return { data: result, meta };
};

// get a book
const getABookFromDB = async (_id: string) => {
  const result = ProductModel.findOne({ _id, isDeleted: false });
  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'book Not Found');
  }
  return result;
};

//update a book
const UpdateABook = async (_id: string, book: Partial<Product>) => {
  const product = await ProductModel.findOne({ _id, isDeleted: false });
  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, 'product Not Found');
  }

  const result = await ProductModel.findByIdAndUpdate(_id, book, {
    new: true,
    runValidators: true,
  });
  return result;
};

//delete a book
const deleteABook = async (_id: string) => {
  const product = await ProductModel.findOne({ _id, isDeleted: false });
  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, 'product Not Found');
  }

  const result = await ProductModel.findOneAndDelete({ _id });
  return result;
};

export const ProductServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getABookFromDB,
  UpdateABook,
  deleteABook,
};
