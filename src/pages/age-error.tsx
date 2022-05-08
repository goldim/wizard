import { Link } from 'react-router-dom'

import styles from "./common.module.css"

const AgeErrorPage = () => (
    <div className={styles.content}>
        <h1>Oops</h1>
        <p>Your age is over our accepted limit.</p>
        <p>We are sorry but we can't insure you now.</p>
        <p><Link to='/'><button className={styles.pageButton}>Ok :(</button></Link></p>
    </div>
);

export default AgeErrorPage;