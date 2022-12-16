const { Schema } = require('mongoose')
const mongoose = require('mongoose')
const Book = require('./book')

const commentSchema = new mongoose.Schema({
    book: {type: Schema.Types.ObjectId, ref: 'Book'},
    username: String,
    comment: String
    
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment


