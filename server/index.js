const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const port = 21032;
const baseDir = '../www/';

app.use(express.static(path.join(__dirname, `${baseDir}`)));
app.use(cors());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, `${baseDir}`, 'index.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'mysql.artync.com.br',
  user: 'artync',
  password: 'artync3',
  database: 'artync'
});

app.post('/api/send-message', (req, res) => {
  const dados = req.body;
  const numeroTelefone = "5551993833991";
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(dados.mensagem)}`;
  res.redirect(linkWhatsApp);
});

app.get('/api/buscar', (req, res) => {
  db.query('SELECT * FROM atributos', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});






app.listen(port);