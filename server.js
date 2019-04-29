require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true
}).catch(err => {
    console.log('Error connecting to MongoDB', err);
});

app.use('/api/accounts', require('./routes/accounts'));
app.use('/api/contacts', require('./routes/contacts'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server started on: ${port}`);
});
