const mysql = require('mysql2');

class Funcoes {

    processa_form(dados, check) {

        const name = dados.nome;
        const email = dados.email;
        const telefone = dados.telefone;
        const localizacao = dados.localizacao;
        const empresa = dados.empresa;
        const conheceu = dados.conheceu;
        const registroDominio = dados.registroDominio;
        const publicoAlvo = dados.publicoAlvo;
        const produtosServicos = dados.produtosServicos;
        const observacoes = dados.observacoes;

        console.log(name, email, telefone, localizacao, empresa, conheceu, registroDominio, publicoAlvo, produtosServicos, observacoes);
        check.forEach(element => {
            console.log(element);
        });

        return true;
    }

    busca(idAtributo) {
        try {
            const data = "Select * from atributos where id = " + idAtributo + "";
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }

    formatarData(data) {
        var dataFormatada = ((data.getDate()) + "/" + ((data.getMonth() + 1)) + "-" + (data.getFullYear()))
        return dataFormatada;
    }
}

module.exports = Funcoes;