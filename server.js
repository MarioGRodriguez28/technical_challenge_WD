const express = require('express');
const phones = require('./data/phones.json');

const app = express();

// Route to show all phones
app.get('/phones', (req, res) => {
  res.json(phones);
});

// Route to show phone details by ID
app.get('/phones/:id', (req, res) => {
  const id = req.params.id;
  const phone = phones.find(phone => phone.id === id);

  if (!phone) {
    return res.status(404).json({ error: 'Phone not found' });
  }

  res.json(phone);
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
