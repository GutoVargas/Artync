const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const baseDir = '../www/';
const axios = require('axios');

//Cria a conexão com o banco de dados
const db = mysql.createConnection({
    host: 'mysql.artync.com.br',
    user: 'artync',
    password: 'artync3',
    database: 'artync'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `${baseDir}`)));
app.use(cors());
app.use(express.json());
const token = 'E302EA2493E64AEBAAB203EF03810811';

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
        checkboxes.push("OpÃ§Ãµes selecionadas:");
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

    const mensagem = `OlÃ¡, Meu nome é ${nome}!\n` +
        `Detalhes do formulÃ¡rio:\n` +
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

//Teste Checkout
app.post('/checkout/pagamento', (req, res) => {

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
            reference_id: 'Pedido 1 Teste',
            items: [
                {
                    reference_id: 'produto1',
                    name: 'Site Teste',
                    quantity: 1,
                    unit_amount: 50000
                }
            ],
            notification_urls: ['https://artync.com.br/notificacoes'],
            charges: [
                {
                    reference_id: 'cobranca01',
                    description: 'descricao da cobranca',
                    amount: { value: 50000, currency: 'BRL' },
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

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });

});

//Teste Notificação
app.post('/notificacoes', (req, res) => {
    const data = req.body;
    res.json(data);
});

//Rota Geral caso não entre em nenhuma acima
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, `${baseDir}`, 'index.html'));
});

const port = 21032;
app.listen(port);