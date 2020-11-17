const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    loggedIn: { type: Date, default: Date.now },
    loggedOut: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    token: { type: String },
    clientIp: { type: String }
});

module.exports = mongoose.model('audit', schema);