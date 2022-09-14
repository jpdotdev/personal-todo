// delcare variables that we need for back-end
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8500;
require('dotenv').config({path: './config/.env'});
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const editRoutes = require('./routes/edit')

connectDB();

// set middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)


app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`));
