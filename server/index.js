const SSL = "false";


if (SSL == true) {

  const express = require('express');
  const path = require('path');
  const app = express();
  const bodyParser = require('body-parser');
  const mysql = require('mysql2');
  const cors = require('cors');

  const port = 21032;
  const baseDir = '../www/'

  const db = mysql.createConnection({
    host: 'mysql.artync.com.br',
    user: 'artync',
    password: 'artync3',
    database: 'artync'
  });


  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, `${baseDir}`)));
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

  app.get('/api/formorcamento', (req, res) => {
    db.query('SELECT * FROM orcamento o INNER JOIN empresa e ON e.id = o.idEmpresa;', (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(results);
      }
    });
  });

  // Função para buscar o nome de um atributo
  async function getNomeAtributo(option) {
    return new Promise((resolve, reject) => {
      db.query('SELECT nome FROM atributos WHERE id = ?', [option], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0].nome);
        }
      });
    });
  }

  app.post('/api/processar-form', async (req, res) => {
    const dados = req.body;

    const nome = dados.nome;
    const email = dados.email;
    const telefone = dados.telefone;
    const localizacao = dados.localizacao;
    const empresa = dados.empresa;
    const conheceu = dados.conheceu;
    const dominio = dados.registroDominio;
    const publicoAlvo = dados.publicoAlvo;
    const produtosServicos = dados.produtosServicos;
    const observacoes = dados.observacoes;

    const checkboxes = [];
    if (Array.isArray(dados.checkbox)) {
      checkboxes.push("Opções selecionadas:");
      for (const option of dados.checkbox) {
        try {
          const nomeAtributo = await getNomeAtributo(option);
          checkboxes.push(`- ${nomeAtributo}`);
        } catch (err) {
          res.status(500).json({ error: err.message });
          return;
        }
      }
    }

    const mensagem = `Olá, ${nome}!\n` +
      `Detalhes do formulário:\n` +
      `- Email: ${email}\n` +
      `- Telefone: ${telefone}\n` +
      `- Localizacao: ${localizacao}\n` +
      `- Nome da Empresa: ${empresa}\n` +
      `- Como nos Conheceu: ${conheceu}\n` +
      `- Registro e Dominio: ${dominio}\n` +
      `- Publico Alvo: ${publicoAlvo}\n` +
      `- Produtos/Servicos: ${produtosServicos}\n` +
      `- Observacoes: ${observacoes}\n` +
      `${checkboxes.join('\n')}`;


    const mensagemFormatada = encodeURIComponent(mensagem);

    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${5551993833991}&text=${mensagemFormatada}`;
    res.redirect(linkWhatsApp);

  });


  app.post('/api/send-message', (req, res) => {
    const dados = req.body;
    const numeroTelefone = "5551993833991";
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(dados.mensagem)}`;
    res.redirect(linkWhatsApp);
  });

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, `${baseDir}`, 'index.html'));
  });

  app.listen(port);


} else {

  /*
  
  
  
  
  TRATAMENTO EM MODO LOCAL
  
  
  
  
  */
  const express = require('express');
  const bodyParser = require('body-parser');
  const mysql = require('mysql2');
  const app = express();
  const cors = require('cors');
  const Funcoes = require('./func.js');

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

  app.get('/api/formorcamento', (req, res) => {
    db.query('SELECT * FROM orcamento o INNER JOIN empresa e ON e.id = o.idEmpresa;', (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(results);
      }
    });
  });

  // Função para buscar o nome de um atributo
  async function getNomeAtributo(option) {
    return new Promise((resolve, reject) => {
      db.query('SELECT nome FROM atributos WHERE id = ?', [option], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0].nome);
        }
      });
    });
  }

  app.post('/api/processar-form', async (req, res) => {
    const dados = req.body;

    const nome = dados.nome;
    const email = dados.email;
    const telefone = dados.telefone;
    const localizacao = dados.localizacao;
    const empresa = dados.empresa;
    const conheceu = dados.conheceu;
    const dominio = dados.registroDominio;
    const publicoAlvo = dados.publicoAlvo;
    const produtosServicos = dados.produtosServicos;
    const observacoes = dados.observacoes;

    const checkboxes = [];
    if (Array.isArray(dados.checkbox)) {
      checkboxes.push("Opções selecionadas:");
      for (const option of dados.checkbox) {
        try {
          const nomeAtributo = await getNomeAtributo(option);
          checkboxes.push(`- ${nomeAtributo}`);
        } catch (err) {
          res.status(500).json({ error: err.message });
          return;
        }
      }
    }

    const mensagem = `Olá, ${nome}!\n` +
      `Detalhes do formulário:\n` +
      `- Email: ${email}\n` +
      `- Telefone: ${telefone}\n` +
      `- Localizacao: ${localizacao}\n` +
      `- Nome da Empresa: ${empresa}\n` +
      `- Como nos Conheceu: ${conheceu}\n` +
      `- Registro e Dominio: ${dominio}\n` +
      `- Publico Alvo: ${publicoAlvo}\n` +
      `- Produtos/Servicos: ${produtosServicos}\n` +
      `- Observacoes: ${observacoes}\n` +
      `${checkboxes.join('\n')}`;


    const mensagemFormatada = encodeURIComponent(mensagem);

    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${5551993833991}&text=${mensagemFormatada}`;
    res.redirect(linkWhatsApp);

  });


  app.post('/api/send-message', (req, res) => {
    const dados = req.body;
    const numeroTelefone = "5551993833991";
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(dados.mensagem)}`;
    res.redirect(linkWhatsApp);
  });

  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });

}

