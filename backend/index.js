const express = require('express');
const cors = require('cors');
const path = require('path');
const emailRoutes = require('./routes/email.js');
const PORT = process.env.PORT || 4000;

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api', emailRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server started running on port ${PORT}`);
});
