const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
//const pagseguro = require('pagseguro-nodejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Cria a conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'artync'
});

//usado na tela client/src/components/OrcamentoMain para buscar os atributos do banco
app.get('/api/buscar', (req, res) => {
  db.query('SELECT * FROM atributos', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

//USADO PARA TESTE
app.get('/api/formorcamento', (req, res) => {
  db.query('SELECT * FROM orcamento o INNER JOIN empresa e ON e.id = o.idEmpresa;', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

//Usado na tela de OrçamentoMain para processar o form de orcamento
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

//Usado na tela Main para enviar mensagem com o form no rodapé
app.post('/api/send-message', (req, res) => {
  const dados = req.body;
  const numeroTelefone = "5551993833991";
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(dados.mensagem)}`;
  res.redirect(linkWhatsApp);
});

//Rota para gerar pagamento e pedido Pagbank
app.post('/pagamento', async (req, res) => {

  const dataForm = req.body;
  res.json(dataForm);

  try {
    const options = {
      method: 'POST',
      url: 'https://sandbox.api.pagseguro.com/orders',
      headers: {
        accept: 'application/json',
        Authorization: 'E302EA2493E64AEBAAB203EF03810811',
        'content-type': 'application/json'
      },
      data: {
        customer: {
          name: 'Gustavo Luis de Vargas',
          email: 'c83297873803938568345@sandbox.pagseguro.com.br',
          tax_id: '12345678909',
          phones: [{ country: '55', area: '51', number: '993833991', type: 'MOBILE' }]
        },
        shipping: {
          address: {
            street: 'Rua Visconde do Rio Branco',
            number: '236',
            complement: 'apto 206',
            locality: 'Centro',
            city: 'Arroio do Meio',
            region_code: 'RS',
            country: 'BRA',
            postal_code: '95940000'
          }
        },
        reference_id: 'Pedido Num 1',
        items: [
          {
            reference_id: 'produto1',
            name: 'Site Teste',
            quantity: 1,
            unit_amount: 5000
          }
        ],
        notification_urls: ['https://artync.com.br/notificacoes'],
        charges: [
          {
            reference_id: 'Cobranca Pedido Num 1',
            description: 'descricao da cobranca',
            amount: { value: 5000, currency: 'BRL' },
            payment_method: {
              type: 'CREDIT_CARD',
              installments: 1,
              capture: true,
              soft_descriptor: 'Artync',
              card: {
                store: true,
                number: '4111111111111111',
                exp_month: 12,
                exp_year: 2030,
                security_code: '123'
              }
            }
          }
        ]
      }
    };

    const response = await axios.request(options);
    console.log("Deu Certoooo");
    res.redirect("http://www.artync.com.br/");
  } catch (error) {
    console.error("Erro na requisição:", error);
    res.status(500).send("Erro na requisição");
  }
});

//Rota para notificações de Pagamento.
app.post('/notificacoes', (req, res) => {
  try {
    // Lide com a notificação recebida do PagSeguro
    const notificationData = req.body;
    console.log('Notificação recebida:', notificationData);

    // Realize as ações necessárias com base nas informações da notificação
    // Por exemplo, atualize o estado do pedido no seu sistema, envie e-mails, etc.

    // Responda ao PagSeguro para confirmar o recebimento da notificação
    res.status(200).send('Notificação recebida com sucesso');
  } catch (error) {
    console.error('Erro ao lidar com notificação:', error);
    res.status(500).send('Erro ao lidar com notificação');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});



