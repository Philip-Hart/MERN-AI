const axios = require("axios");
const serpApi = require("google-search-results-nodejs");
const fs = require('fs');

const search = new serpApi.GoogleSearch(process.env.SERP_API_KEY)
let scrapedShoes;
const pagesLimit = 10;
let currentPage = 1;

const processEbayResults = (results, vendorString, searchTerm) => {
    var products = []
    for (res in results) {


        products.push({
            vendor: vendorString,
            search: searchTerm,
            title: results[res].title,
            link: results[res].link,
            condition: results[res].condition,
            price: results[res].price,
            shipping: results[res].shipping,
            thumbnail: results[res].thumbnail,
            extracted_quantity_sold: results[res].extracted_quantity_sold,
            extracted_watchers: results[res].extracted_watchers,
        })
         
        
    };
    return products;


  };
 

const scrapeShoes = async(searchString, vendor, search) => {
    let params;
    if (vendor === 'ebay') {
        params = {
            engine: vendor,
            _nkw: searchString,
            ebay_domain: "ebay.com",
            _pgn: currentPage,
        }
    } 
    const organicResults = [];
    while (true) {
      if (currentPage > pagesLimit) break;
      const json = await getJson(params);
      
      if (json.search_information?.organic_results_state === "Fully empty") break;
      if (vendor === 'ebay') {

        organicResults.push(...(await getOrganicEbayResults(json)));
    } 
      
      currentPage++;
    }
 
    let processedResults
    if (vendor === 'ebay') {
        processedResults = processEbayResults(organicResults,vendor,search)
    } 

    return processedResults;

}

const getOrganicEbayResults = ({ organic_results }) => {
    return organic_results.map((element) => {

      const {link, title, condition = "No condition data", price = "No price data", shipping = "No shipping data", thumbnail = "No image",extracted_quantity_sold="None sold",extracted_watchers=0 } = element;
      return {
        link,
        title,
        condition,
        price: price.raw ? price.raw : `${price.from?.raw} - ${price.to?.raw}`,
        shipping,
        thumbnail,
        extracted_quantity_sold,
        extracted_watchers,
      };
    });
  };

  
  const getJson = (params) => {
    return new Promise((resolve) => {
      search.json(params, resolve);
    });
  };

 
  
module.exports = {
    scrapeShoes: scrapeShoes,
};