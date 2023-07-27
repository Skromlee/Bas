const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors')
const path = require('path')
const port = 3002;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});