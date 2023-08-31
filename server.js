const express = require('express');
const app = express();
const mongoose = require('mongoose');

//const DB_URL = "mongodb://localhost:27017/octa";
// you can use one of these if localhost is not working properly.
//const DB_URL = "mongodb://127.0.0.1:27017/octa";
const DB_URL = "mongodb://0.0.0.0/octa";

//Database connection configuration
mongoose.connect(DB_URL);
const conn = mongoose.connection;
conn.once('open', () => {
    console.log('successfully connected to database');
})
conn.on('error', (err) => {
    console.log(`failed to connect to database ${err.message}`);
})


//server configuration
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App is listening on Port - ${PORT}`);
});

/* Please SubScribe OctaCoder Youtube Channel
    https://www.youtube.com/@octacoder
 */