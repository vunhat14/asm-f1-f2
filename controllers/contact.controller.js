const Contact = require("../models/contact.model.js");

exports.create = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.status(400).send({ message: "Content cannot be empty!" });
  }

  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  Contact.create(newContact, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Contact.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};
