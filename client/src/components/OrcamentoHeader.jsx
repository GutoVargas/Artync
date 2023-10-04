import styles from './OrcamentoHeader.module.css'
import { Link } from 'react-router-dom';


function OrcamentoHeader() {

    return (
        <header className={styles.HeaderBackground}>
            <Link to='/'>
                <img src='./images/HeaderLogo.png' className={styles.HeaderLogo} alt='' />
            </Link>
            <h1 className={styles.HeaderTittle}>SOLICITE O ORÇAMENTO</h1>
        </header>
    )
}

export default OrcamentoHeader