const express = require('express');

const app = express();
const PORT = 3001;

// Basic route
app.get('/', (req, res) => {
  res.send('<h1>Firefox is running at localhost:3001!</h1>');
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);

  // Firefox open করার জন্য dynamic import
  const open = (await import('open')).default;
  await open(`http://localhost:${PORT}`, {app: {name: 'firefox'}});
});
