import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/bookRoute.js';
import cors  from 'cors';

const app = express();

//middleware to parse request body

app.use(express.json());

//middleware to handle CORS Policy
app.use(cors());

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Online bookstore tutorial');
});

app.use('/books', booksRoute);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App connected to the database');
    app.listen(PORT, () => {
    console.log(`App is listening to Port : ${PORT}`);
});
})
.catch((error) => {
    console.log(error);
})