const assert = require('assert');
const mongoose = require('mongoose');
const AuthorModel = require('../models/AuthorModels');

describe('Nesting records', () => {
	beforeEach(done => {
		mongoose.connection.collections.Authors.drop(() => {
			done();
		});
	});
	
	it('Creates an author with sub-documents', done => {
		const author = new AuthorModel({
			name: 'Patrick Stewart',
			books: [
				{
					title: 'Name of the Wind',
					pages: 400,
				},
			],
		});

		author.save().then(() => {
			AuthorModel.findOne({ name: 'Patrick Stewart' }).then(res => {
				assert(res.books.length === 1);
				done();
			});
		});
	});

	it('Add a book to an author', done => {
		const author = new AuthorModel({
			name: 'Sponge Bob',
			books: [
				{
					title: 'Tale of the Wind',
					pages: 500,
				},
			],
		});

		author.save().then(() => {
			AuthorModel.findOne({ name: 'Sponge Bob' }).then(res => {
				res.books.push({ title: 'Tail of two cities', pages: 500 });
				res.save().then(() => {
					AuthorModel.findOne({ name: 'Sponge Bob' }).then(res => {
						assert(res.books.length === 2);
						done();
					});
				});
			});
		});
	});
});
