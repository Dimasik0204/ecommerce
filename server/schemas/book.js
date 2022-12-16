const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String, 
    isbn: String, 
    author: String, 
    isPublished: Boolean
})


// mongoose.model('ModelName', schema) - Model Name automatically pluralize and becomes the collection name in the MongoDb database 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book 
