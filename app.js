// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// API để thêm contact
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      res.status(500).send('Error saving contact');
      return;
    }
    res.status(200).send('Contact saved');
  });
});

// API để lấy tất cả contact
app.get('/api/contacts', (req, res) => {
  const query = 'SELECT * FROM contacts';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving contacts');
      return;
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
