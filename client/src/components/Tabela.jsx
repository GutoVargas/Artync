import styles from './Tabela.module.css'

function Tabela () {
    return (
        <div className={styles.window}>
            <section className={styles.dashboard}>
                <aside className={styles.menu}>
                    <section>
                        <div className={styles.MenuImg}>
                            <img src='./images/HeaderLogo.png' alt=''/>
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
                            <tr>
                                <th>NomeExemplo</th>
                                <th>DataExemplo</th>
                                <th>StatusExemplo</th>
                            </tr>
                            <tr>
                                <th>NomeExemplo</th>
                                <th>DataExemplo</th>
                                <th>StatusExemplo</th>
                            </tr>
                            <tr>
                                <th>NomeExemplo</th>
                                <th>DataExemplo</th>
                                <th>StatusExemplo</th>
                            </tr>
                            <tr>
                                <th>NomeExemplo</th>
                                <th>DataExemplo</th>
                                <th>StatusExemplo</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Tabela