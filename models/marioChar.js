const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarioCharSchema = new Schema({
	name: String,
	weight: Number,
});

const MarioCharModel = mongoose.model('MarioCharacter', MarioCharSchema);

module.exports = MarioCharModel;
