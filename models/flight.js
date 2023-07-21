const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
  airport: {
    type: String,
    enum: ["HNL","SJU","CUN", "SST" ]},
  arrival: {
    type: Date,
  }
})


const flightSchema = new Schema({
  airline: {
    type: String, required: true,
     enum: ["American", "Southwest", "Delta"]},
  airport: {
     type: String, 
      enum: ["ATL", "AUS", "DEN", "NYC", "LAX"],
       default: "ATL"},
  flightNo: {
      type: Number,
      min: 10, max: 9999,
      default: function() {
         return Math.floor(Math.random() * 9999) + 10;
      }
       },
  departs: {
        type: Date,
        default: function() {
          return new Date(+ new Date() + (365 * 24 * 60 * 60 * 1000));
          },
        },
  destination: [destinationSchema]
});




module.exports = mongoose.model("Flight", flightSchema);