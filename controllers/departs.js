const Flight = require("../models/flight");

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.destination.push(req.body);
    console.log(flight.destination);
    console.log(req.body);

    try {
        await flight.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight.id}`);
}

module.exports = {
    create
}