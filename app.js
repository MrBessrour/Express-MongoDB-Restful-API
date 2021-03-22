//simple rest api exemple 
//made on top of express module 

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const postRoutes = require('./routes/post');
const bodyParser = require('body-parser');
require('dotenv/config');

//midelwares
app.use(bodyParser.json());
app.use('/post', postRoutes);


//MongoDB connection 
//change the DB_CONNECTION in .env file with your cluster link 
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log(`db err ${err.message}`);
    });

//serving and listening on port 8000
app.listen(8000);