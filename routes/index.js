import express from "express";
import addBooks from "./addBooks";
import viewBook from "./viewBook";

const router = express.Router();

/**
 * Configures and returns an Express router with routes for the Node Book Library application.
 *
 * @returns {import('express').Router} An Express router instance with defined routes.
 *
 * @description
 * This function sets up routes for the Node Book Library application. It includes:
 * - A root route (`'/'`) that renders the index page.
 * - A route for adding books (`'/add-book'`) handled by the `addBooks` middleware.
 * - A route for viewing books (`'/view-book'`) handled by the `viewBook` middleware.
 */
module.exports = () => {
    router.get('/', (request, response) => {
        response.render('pages/index', { pageTitle: 'Node Book Library' })
    });

    router.use('/add-book', addBooks());
    router.use('/view-book', viewBook());

    return router;
};