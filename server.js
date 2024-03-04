// Create a new file named server.js and add the following code:
//server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data
let locations = [
  { id: 1, name: 'Location 1', latitude: 40.7128, longitude: -74.006 },
  { id: 2, name: 'Location 2', latitude: 34.0522, longitude: -118.2437 }
];

// GET all locations
app.get('/locations', (req, res) => {
  res.json(locations);
});

// POST a new location
app.post('/locations', (req, res) => {
  const { name, latitude, longitude } = req.body;
  const id = locations.length + 1;
  const newLocation = { id, name, latitude, longitude };
  locations.push(newLocation);
  res.status(201).json(newLocation);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



