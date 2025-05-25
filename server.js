const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'DYNASEC-COMMANDER-KEY';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// JWT Auth Middleware
app.use('/api', (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
});

// AI Command Route
app.post('/api/command-response', (req, res) => {
  const cmd = req.body.command.toLowerCase();
  const reply = `Command received securely: "${cmd}". Aegis AI acknowledges.`;
  res.json({ reply });
});

// Empire JSON route
app.get('/api/empires.json', (req, res) => {
  res.json({
    empires: [
      { name: "Dynasec Core", status: "Operational" },
      { name: "OrbitalSec", status: "Monitoring Satellite Grid" },
      { name: "Genova AI", status: "Population Expansion in Progress" }
    ]
  });
});

// Frontend fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`CIC SECURE SERVER ACTIVE ON http://localhost:${PORT}`);
});
