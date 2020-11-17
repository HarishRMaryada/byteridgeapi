const db = require('_helpers/db');
const Audit = db.Audit;

module.exports = {
    getAll,
    create,
    update
};

async function getAll() {
    return await Audit.find().populate('user').exec();
}

async function create(data) {
    const audit = new Audit(data);
    await audit.save();
}

async function update(token) {
    const audit = await Audit.findOne({ token: token })
    audit.loggedOut = new Date();
    await audit.save();
}