require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Successfullly connected to mongodb');
    })
    .catch(err => console.log(err));


app.use(routes);

app.listen(PORT, () => console.log('Successfully created server'));