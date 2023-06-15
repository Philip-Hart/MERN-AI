const dotenv = require('dotenv');
dotenv.config({path:__dirname+'/.env'});
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const port = process.env.SERVER_PORT

const app = express()
app.use(cors)
app.use(express.json())
mongoose.connect(process.env.ATLAS_URI);
app.listen(port, () => {
    console.log(`Back-End is running on port: ${port}`);
})