const express = require('express');
const router = express.Router();

// controller module
const flightsCtrl = require("../controllers/flights");

router.get("/", flightsCtrl.index);

router.get("/new", flightsCtrl.new);

router.get("/:id", flightsCtrl.show);

router.post("/", flightsCtrl.create);


module.exports = router;
