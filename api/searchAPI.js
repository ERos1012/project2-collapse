const express = require('express');
const app = express();

// Define the API endpoint for searching
app.get('/api/search', (req, res) => {
  const query = req.query.q;

  // Query the database using the search query
  // and return the results as JSON
  const results = queryDatabase(query);
  res.json(results);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function queryDatabase(query) {
  // Implement your database query logic here
  // and return the matching results as an array of objects
  return [
    { id: 1, title: 'Result 1' },
    { id: 2, title: 'Result 2' },
    { id: 3, title: 'Result 3' },
  ];
}
