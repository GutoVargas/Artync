import styles from './Tabela.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


function formatarData(data) {
    const date = new Date(data);
    const dataFormatada =  ((date.getDate()) + "/" + ((date.getMonth() + 1)) + "/" + (date.getFullYear()));
    return dataFormatada;
}

function Tabela() {



    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/formorcamento')
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    return (
        <div className={styles.window}>
            <section className={styles.dashboard}>
                <aside className={styles.menu}>
                    <section>
                        <div className={styles.MenuImg}>
                            <img src='./images/HeaderLogo.png' alt='' />
                        </div>
                        <h1>Checkboxs</h1>
                    </section>
                </aside>
                <div className={styles.dados}>
                    <div>
                        <h1>teste</h1>
                        <input type="button" text='Adicionar' />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome da empresa</th>
                                <th>Data</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className={styles.corpo}>
                            {dados.map(item => (
                                <tr id={item.id}>
                                    <th>{item.nomeEmpresa}</th>
                                    <th>{formatarData(item.dataOrcamento)}</th>
                                    <th>{item.status}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )


}



export default Tabela