const express = require("express");
const app =  express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'))

const { PORT } = dotenv.config().parsed || 8000;
app.listen(PORT, () => {
    console.log(`server start port ${PORT}`)
})