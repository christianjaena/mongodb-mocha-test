const assert = require('assert');
const MarioCharModel = require('../models/marioChar');

describe('Deleting records', () => {
	var char;

	beforeEach(done => {
		char = new MarioCharModel({ name: 'Mario', weight: 50 });
		char.save().then(() => {
			assert(!char.isNew);
			done();
		});
	});

	it('Updates one record from the database', done => {
		MarioCharModel.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(
			() => {
				MarioCharModel.findOne({ _id: char._id }).then(res => {
					assert(res.name === 'Luigi');
					done();
				});
			}
		);
	});

	it('Increments the weight by 1', done => {
		MarioCharModel.update({}, { $inc: { weight: 1 } }).then(() => {
			MarioCharModel.findOne({ name: 'Mario' }).then((res) => {
				assert(res.weight === 51);
				done()
			})
		})
	})
});
