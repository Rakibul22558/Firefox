const express = require('express');
const open = require('open');

const app = express();
const PORT = 3001;

// Basic route
app.get('/', (req, res) => {
  res.send('<h1>Firefox is running at localhost:3001!</h1>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  
  // Open Firefox at localhost:3001
  open(`http://localhost:${PORT}`, {app: {name: 'firefox'}});
});
