import express from "express";

const router = express.Router();


/**
 * Configures and returns an Express router with a route for adding a book.
 *
 * @returns {import('express').Router} An Express router instance with the defined route.
 *
 * @description
 * This function sets up a route for the `'/'` path that renders the "Add Book" page
 * of the Node Book Library application. The page is rendered with a title of 'Add Book | Node Book Library'.
 */
module.exports = () => {
    router.get('/', (request, response) => {
        response.render('pages/index', { pageTitle: 'Add Book | Node Book Library' })
    });

    return router;
};