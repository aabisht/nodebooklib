import fs from "fs";
import { promisify } from "util";

/**
 * We want to use async/await with fs.readFile - util.promisfy gives us that
 */
const readFile = promisify(fs.readFile);

/**
 * Paginates an array of data
 * @param {Array} data - The array of items to paginate
 * @param {number} page - The current page number (1-based index)
 * @param {number} pageSize - The number of items per page
 * @returns {Object} Paginated data including the current page items and metadata
 */
const paginate = (data, page, pageSize) => {
    // Calculate the starting index for the current page
    const startIndex = (page - 1) * pageSize;

    // Get the items for the current page
    const items = data.slice(startIndex, startIndex + pageSize);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / pageSize);

    return {
        page,
        pageSize,
        totalPages,
        totalItems: data.length,
        items
    };
};

/**
 * Fetches list of books data from the JSON file
 * @param {string} datafile Path to a JSON file that contains the list of books data
 * @param {Number} pageNumber - The page number for pagination
 * @returns {Promise<Array>} Parsed list of books data
 */
const getAllBooksData = async (dataFile, pageNumber) => {
    const data = await readFile(dataFile);
    return paginate(JSON.parse(data).reverse(), pageNumber, 10);
}

/**
 * Fetches list of read books data from the JSON file
 * @param {string} datafile Path to a JSON file that contains the list of books data
 * @param {Number} pageNumber - The page number for pagination
 * @returns {Promise<Array>} Parsed list of read books data
 */
const getAllReadBooksData = async (dataFile, pageNumber) => {
    const data = await readFile(dataFile);
    const _books = JSON.parse(data).filter(book => book.status === true)

    return paginate(_books.reverse(), pageNumber, 10);
}

/**
 * Fetches list of un-read books data from the JSON file
 * @param {string} datafile Path to a JSON file that contains the list of books data
 * @param {Number} pageNumber - The page number for pagination
 * @returns {Promise<Array>} Parsed list of un-read books data
 */
const getAllUnReadBooksData = async (dataFile, pageNumber) => {
    const data = await readFile(dataFile);
    const _books = JSON.parse(data).filter(book => book.status === false)
    return paginate(_books.reverse(), pageNumber, 10);
}

/**
 * Fetches book detail using book id from the JSON file
 * @param {string} datafile Path to a JSON file that contains the list of books data
 * @param {number} bookId Id of the book who data needs to be fetched
 * @returns {Promise<Object>} Parsed book detail
 */
const getBookDetail = async (dataFile, bookId) => {
    const data = await readFile(dataFile);
    const _bookId = Number(bookId);
    const _bookDetail = data.filter(bookDetail => bookDetail.id === _bookId)
    return _bookDetail;
}

module.exports = {
    getAllBooksData,
    getAllReadBooksData,
    getAllUnReadBooksData,
    getBookDetail
}