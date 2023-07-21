const Flight = require("../models/flight");
const Ticket = require("../models/ticket");


async function index(req, res) {
    const flights = await Flight.find({});
    res.render("flights/index", { title: "All Flights", flights });
  }


function newFlight(req, res) {
    res.render("flights/new", { title: "New Flights"});
  }

async function create(req, res) {
   let newFlight = await Flight.create(req.body);
    res.redirect("/flights");
  }

async function show(req, res) {
  const flight = await Flight.findById(req.params.id) 
  const tickets = await Ticket.find({flight: flight._id})
  console.log(tickets);
  res.render("flights/show", {title: "Flight Detail", flight, tickets});   
};
  
    






module.exports = {
index,
new: newFlight,
create,
show,
}