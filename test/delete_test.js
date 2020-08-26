const assert = require('assert');
const MarioCharModel = require('../models/marioChar');

describe('Deleting records', () => {
	var char;

	beforeEach(done => {
		char = new MarioCharModel({ name: 'Mario' });
		char.save().then(() => {
			assert(!char.isNew);
			done();
		});
	});

	it('Deletes one record from the database', done => {
		MarioCharModel.findOneAndRemove({ name: 'Mario' }).then(() => {
			MarioCharModel.findOne({ name: 'Mario' }).then(res => {
				assert(res === null);
				done();
			})
		})
	})
});
