const express = require('express');
const app = express();

require('dotenv').config();
const DbConfig = require('./config/DbConfig');

const PORT = '8080';

app.listen(PORT, ()=>{
    console.log('server started'); 
})