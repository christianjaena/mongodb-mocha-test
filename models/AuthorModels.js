const mongoose = require('mongoose');
const { model } = require('./marioChar');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: String,
	pages: Number
})

const AuthorSchema = new Schema({
	name: String,
	age: Number,
	books: [BookSchema]
})

const AuthorModel = new mongoose.model('Author', AuthorSchema);

module.exports = AuthorModel;