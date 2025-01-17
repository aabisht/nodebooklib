import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (request, response) => {
    response.send('Hello World')
});

app.listen(PORT, () => {
    console.log(`Express sever is running on ${PORT}...`)
})
