const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

async function create(req, res) {
  const flight = await Flight.findById(req.params.id); 
  const ticket = new Ticket(req.body);
  ticket["flight"] = req.params.id
console.log(req.body);
try {
   await ticket.save();
   
} catch (err) {
    console.log(err);
}
res.redirect(`/flights/${req.params.id}`);
}



module.exports = {
    create,

}