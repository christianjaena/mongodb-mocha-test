const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(done => {
	mongoose.connect('mongodb://localhost/mongodbtuts', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	mongoose.connection
		.once('open', () => {
			console.log('MongoDB connected');
			done();
		})
		.on('error', err => {
			console.error('Shit happened');
		});
});

beforeEach(done => {
	mongoose.connection.collections.MarioCharacters.drop(() => {
		done();
	});
});
