const Product = require("../models/product");
const mongoose = require("mongoose");

const data1 = [{
    name: "ali raza",
    company: "akd network",
    price: 2321312321,
    colors: ["red", "green", "yellow"],
    image: "https://imges.css",
    category: "men cloths",
    isFeatured: true,
  },
  {
    name: "zaidi",
    company: "developer",
    price: 2321312321,
    colors: ["red", "green", "yellow"],
    image: "https://imges.css",
    category: "men cloths",
    isFeatured: true,
  }];

async function insertManyData() {
  try {
    const result = await Product.insertMany(data1);
    console.log("Documents inserted successfully:", result);

  } catch (err) {
    console.error("Error:", err);
  }
}


module.exports = {  insertManyData };

