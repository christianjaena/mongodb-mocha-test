const assert = require('assert');
const MarioCharModel = require('../models/marioChar');

describe('Saving records', () => {
	it('Saves a record to the database', done => {
		const addMarioChar = new MarioCharModel({
			name: 'Mario',
			weight: 50
		});

		addMarioChar.save().then(() => {
			assert(!addMarioChar.isNew);
			done();
		});
	});
});
