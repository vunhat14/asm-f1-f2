const sql = require("./db.js");

const Contact = function(contact) {
  this.name = contact.name;
  this.email = contact.email;
  this.message = contact.message;
};

Contact.create = (newContact, result) => {
  sql.query("INSERT INTO contacts SET ?", newContact, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newContact });
  });
};

Contact.getAll = result => {
  sql.query("SELECT * FROM contacts ORDER BY created_at DESC", (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Contact;
