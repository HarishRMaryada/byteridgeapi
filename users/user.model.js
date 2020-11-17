const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    roles: { type: String }, //for ease considering single role per user
    createdDate: { type: Date, default: Date.now },
    token: { type: String }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('user', schema);