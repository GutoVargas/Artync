import styles from './OrcamentoMain.module.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrcamentoMain() {

    const [dados, setDados] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/api/buscar')
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    return (
        <main className={styles.Main}>
            <form action='http://localhost:3001/api/processar-form' method='post'>
                <section className={styles.MainInputs}>
                    <p>Nessa página você pode solicitar um orçamento personalizado para seu site. <br /> Entraremos em contato para saber mais sobre sua empresa caso seja necessário.</p>
                    <input type='text' placeholder='Nome' name='nome' id='nome'></input>
                    <input type='text' placeholder='Email' name='email' id='email'></input>
                    <input type='text' placeholder='Telefone ou Whatsapp' name='telefone' id='telefone'></input>
                    <input type='text' placeholder='Localização' name='localizacao' id='localizacao'></input>
                    <input type='text' placeholder='Sua empresa' name='empresa' id='empresa'></input>
                    <input type='text' placeholder='Como nos conheceu?' name='conheceu' id='conheceu'></input>
                    <input type='text' className={styles.WholeInput} name="registroDominio" placeholder='Já possui o registro de dominio? Caso nao, que dominio gostaria de usar? Ex: www.examplo.com.br' id='registroDominio'></input>
                    <input type='text' className={styles.WholeInput} name="publicoAlvo" placeholder='Qual o seu público-alvo (PJ ou PF, região de atuação, etc)' id='publicoAlvo'></input>
                    <input type='text' className={styles.WholeInput} name="produtosServicos" placeholder='Que produtos/serviços sua empresa oferece? ' id='produtosServicos'></input>
                    <input type='text' className={styles.WholeInput} name="observacoes" placeholder='Observações adicionais' id='observacoes'></input>
                    <h1>Selecione os itens que tem interesse em adicionar ao seu projeto</h1>
<<<<<<< HEAD
                    <div className={styles.MainCheckbox}>
                        {dados.map(item => (
                            <div className={styles.MainCheckboxItem}>
                                <input type='checkbox' name='checkbox' key={item.id} value={item.id} id={item.nome}/>
                                <img src={item.url_icon} alt=""/>
                                <h1>{item.nome}</h1>
                            </div>
                        ))}

                    </div>
                    <button className={styles.MainButton}>
                        <p>Solicitar um orçamento</p>
                        <img src="./images/flecha.png" alt="" />
                    </button>
=======
>>>>>>> origin/front
                </section>
                <div className={styles.MainCheckbox}>
                    {dados.map(item => (
                        <div className={styles.MainCheckboxItem}>
                            <input type='checkbox' name='checkbox' key={item.id} value={item.id} />
                            <img src={item.url_icon} alt=""/>
                            <p>{item.nome}</p>
                        </div>
                    ))}
                </div>
                <button className={styles.MainButton}>
                    <p>Solicitar um orçamento</p>
                    <img src="./images/flecha.png" alt="" />
                </button>
            </form>
        </main >
    )


}

export default OrcamentoMain