require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true
}).catch(err => {
    console.log('Error connecting to MongoDB', err);
});

app.listen(port, () => {
    console.log(`Server started on: ${port}`);
});
