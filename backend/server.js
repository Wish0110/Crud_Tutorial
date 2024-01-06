const express = require ('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host= 'localhost';
const mongoose = require('mongoose');
const router = require ('./router');
const fs = require("fs");

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://wishhiranya:Wishmi99@cluster1.i8qwovs.mongodb.net/?retryWrites=true&w=majority'

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('connected to MongoDB');
    }
    catch(error){
        console.log('MongoDB error: ', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`) 
});   

app.use('/api', router);