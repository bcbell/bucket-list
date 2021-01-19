const Trip = require("../models/trip");

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteTrip,
};

function index(req, res) {
  Trip.find({})
    .populate("addedBy")
    .then((trips) => {
      res.json(trips);
    })
    .catch((err) => {
      res.json(err);
    });
}

function show(req, res) {
  Trip.findById(req.params.id)
    .populate("itinerary")
    .then((trip) => {
      res.json(trip);
    })
    .catch((err) => {
      res.json(err);
    });
}

function create(req, res) {
  req.body.addedBy = req.user._id;
  Trip.create(req.body)
    .then((trip) => {
      res.json(trip);
    })
    .catch((err) => {
      res.json(err);
    });
}

function update(req, res) {
  Trip.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((trip) => {
      res.json(trip);
    })
    .catch((err) => {
      res.json(err);
    });
}

function deleteTrip(req, res) {
  Trip.findByIdAndDelete(req.params.id)
    .then((trip) => {
      res.json(trip);
    })
    .catch((err) => {
      res.json(err);
    });
}
