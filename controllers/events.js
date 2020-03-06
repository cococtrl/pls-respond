const Event = require('../models/event');

module.exports = {
    create,
    index
};

async function index(req,res) {
    try {
        const events = await Event.find({}).sort('-createdAt');
        res.json({ events })
    } catch (error) {
        res.status(401).json({err: 'unauthorized'});
    }
}


async function create(req,res) {
    try {
        const event = await Event.create(req.body);
        res.json({ event });
    } catch (error) {
        res.status(401).json({err: 'unothorized'});
    }
}