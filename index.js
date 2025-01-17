import express from "express";
import path from "path";
import router from "./routes";

const app = express();
const PORT = 3000;

/**
 * Configures the view engine for rendering templates in the application.
 *
 * @param {string} setting - The name of the setting to configure. In this case, it is 'view engine'.
 * @param {string} engine - The name of the template engine to use. Here, it is 'ejs' (Embedded JavaScript Templates).
 */
app.set('view engine', 'ejs');

/**
 * Configures the directory for the application's view templates.
 *
 * @param {string} setting - The name of the setting to configure. In this case, it is 'views'.
 * @param {string} path - The absolute path to the directory containing the view templates.
 *                       This is set to './views' relative to the current directory.
 */
app.set('views', path.join(__dirname, './views'));

/**
 * Serves static files from the specified directory.
 *
 * @param {string} middleware - Middleware function to serve static files.
 * @param {string} path - The absolute path to the directory containing static files. In this case, it points to the './public' folder.
 */
app.use(express.static(path.join(__dirname, './public')));

/**
 * Mounts the specified router middleware to the root path of the application.
 *
 * @param {string} path - The base URL path where the router is mounted. In this case, '/' represents the root path.
 * @param {function} router - A middleware function or a router instance that handles the routes and logic for the application.
 */
app.use('/', router());

/**
 * Starts the Express server and listens for incoming connections on the specified port.
 *
 * @param {number} PORT - The port number on which the server will listen.
 * @param {function} callback - A callback function that executes once the server starts successfully.
 */
app.listen(PORT, () => {
    console.log(`Express sever is running on ${PORT}...`)
});
