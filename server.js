const express = require('express');
const app = express();
const PORT = 3000;

// Postavite statički direktorij 'public' za statičke datoteke
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

let comments = [];

// app.post('/xss', (req, res) => {
//   const comment = req.body.comment;
//   comments.push(comment);
//   res.redirect('/xss.html');
// });

const sanitizeInput = (input) => {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  
  app.post('/xss', (req, res) => {
    const comment = sanitizeInput(req.body.comment);
    comments.push(comment);
    res.redirect('/xss.html');
  });

app.listen(PORT, () => {
  console.log(`Server je pokrenut na http://localhost:${PORT}`);
});