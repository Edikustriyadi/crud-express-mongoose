
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Router
const Student = require('./routers/studentRouter');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Router
app.use('/api/v1/student',Student);

//Database
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(process.env.PORT,() => {
        console.log(`Server running ${process.env.URL}:${process.env.PORT}`);
    });
});