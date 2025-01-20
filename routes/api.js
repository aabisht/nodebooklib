import express from "express";
import { getAllBooksData, getAllReadBooksData, getAllUnReadBooksData } from "../service/bookLibraryService";

const router = express.Router();
const booksData = './data/book-data.json';

module.exports = () => {
    router.get('/list', async (request, response, next) => {
        const pageNumber = request.query.page || 1;
        const readStatus = request.query.status || null

        try {
            let _bookData;
            switch (readStatus) {
                case 'read': _bookData = await getAllReadBooksData(booksData, pageNumber);
                    break;
                case 'unread': _bookData = await getAllUnReadBooksData(booksData, pageNumber);
                    break;
                default: _bookData = await getAllBooksData(booksData, pageNumber);
            }
            return response.json(_bookData);
        } catch {
            const error = new Error("Something went wrong.");
            next(error);
        }
    });

    return router;
};