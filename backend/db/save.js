const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;


const insertProducts = async (conn, products) => {


   try {
        const dbObj = conn.db("e-commerce");
        dbObj.collection("products").insertMany(products, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
   } catch (err) {
        console.log(`Data was unable to be saved: ${err}`)
   }
}

module.exports = {
    insertProducts:insertProducts,
};