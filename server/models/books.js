/*--File name: books.js
Name: Prince Duru
Student Id: 301167756
Date: 10/29/2021
Favourite Book List */


let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
