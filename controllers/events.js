const Event = require('../models/event');

module.exports = {
    create,
    index,
    getEvent
};

async function getEvent(req, res) {
    try {
        const oneEvent = await Event.find({})
        .sort('-createdAt').limit(3).populate('addedBy');
        res.json({ oneEvent });
    } catch (error) {
        res.status(400).json({err: 'bad request'})
    }
}

async function index(req,res) {
    try {
        const events = await Event.find({}).sort('-createdAt').populate('addedBy');
        res.json({ events });
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