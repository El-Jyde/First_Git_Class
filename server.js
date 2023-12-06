require('./config/config')
const express = require ("express");
require('dotenv').config();
const studentRouter = require ('./routers/router')

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/api/student', studentRouter)
// To access file



app.listen(port, ()=>{
    console.log(`Server is listening to port: ${port}`);
})




