const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
//const Funcoes = require('./func.js');

app.use(bodyParser.urlencoded({ extended: true }));

//Cria a conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'artync'
});



app.use(cors());


app.get('/api/buscar', (req, res) => {
  db.query('SELECT * FROM atributos', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});
/*
app.post('/api/processar-form', (req, res) => {
  const dados = req.body;
  const check = req.body.checkbox;
  const processar = new Funcoes();
  if (processar.processa_form(dados, check)) {
    res.redirect('http://localhost:3000/sucesso');
  } else {

  }

});
*/

app.post('/api/send-message', (req, res) => {
  const dados = req.body;
  const numeroTelefone = "5551993833991";
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(dados.mensagem)}`;
  res.redirect(linkWhatsApp);
});

app.get('/api/formorcamento', (req, res) => {
  db.query('SELECT * FROM orcamento ', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
