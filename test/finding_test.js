const assert = require('assert');
const MarioCharModel = require('../models/marioChar');

describe('Finding records', () => {
	var char;

	beforeEach(done => {
		char = new MarioCharModel({ name: 'Mario' });
		char.save().then(() => {
			assert(!char.isNew);
			done();
		});
	});

	it('Finds one record from the database', done => {
		MarioCharModel.findOne({ name: 'Mario' }).then(res => {
			assert(res.name === 'Mario');
			done();
		});
	});

	it('Find one by ID record from the database', done => {
		MarioCharModel.findOneById({ _id: char._id }).then(res => {
			assert(res._id.toString() === char._id.toString());
			done();
		});
	});

});
