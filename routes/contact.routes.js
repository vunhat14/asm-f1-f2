module.exports = app => {
    const contact = require("../controllers/contact.controller.js");
  
    app.post("/api/contacts", contact.create);
    app.get("/api/contacts", contact.findAll);
  };
  