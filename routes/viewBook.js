import express from "express";

const router = express.Router();

/**
 * Configures and returns an Express router with a route for viewing a book.
 *
 * @returns {import('express').Router} An Express router instance with the defined route.
 *
 * @description
 * This function sets up a route for the `'/'` path that renders the "View Book" page
 * of the Node Book Library application. The page is rendered with a title of 'View Book | Node Book Library'.
 */
module.exports = () => {
    router.get('/', (request, response) => {
        response.render('pages/index', { pageTitle: 'View Book | Node Book Library' })
    });

    return router;
};