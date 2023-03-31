const express = require('express');
const phones = require('./data/phones.json');

const app = express();

app.get('/phones', (req, res) => {
  res.json(phones);
});

app.get('/phones/:id', (req, res) => {
  const phone = phones.find(p => p.id === Number(req.params.id));
  if (!phone) {
    res.status(404).send('Phone not found');
  } else {
    res.json(phone);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
