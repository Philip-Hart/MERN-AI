const dotenv = require('dotenv');
dotenv.config({path:__dirname+'/.env'});
const express = require("express");
const cors = require("cors");
const mongodb = require('mongodb');

// Data collection 
const scraper = require("./db/scrape.js");
const saver = require("./db/save.js");

const port = process.env.SERVER_PORT;

const app = express();
app.use(cors);
app.use(express.json());

const mongoClient = mongodb.MongoClient;
mongoClient.connect(process.env.ATLAS_URI, {
    maxPoolSize:50,
    wtimeoutMS:2500,
    useNewUrlParser:true
})
    .catch((error) => {
        console.error(error.stack);
        process.exit(1);
    })
        .then(async (client) => {
            app.listen(port, () => {
                console.log(`Back-End is running on port: ${port}`);
                let productString = 'hats';
                let vendor = 'ebay';
                scraper.scrapeShoes(productString, vendor, productString).then((products) => saver.insertProducts(client,products));
                
            })
        })