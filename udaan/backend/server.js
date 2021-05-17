const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/api');
dotenv.config({path: './config/.env'});

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', routes);

app.listen(3000, console.log("listening to port"));
