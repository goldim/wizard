import { Link } from 'react-router-dom'
import styles from "./common.module.css"

const StartPage = () => (
    <div className={styles.content}>
        <h1>Hello There!</h1>
        <p>Let's buy some insurance. It is going to take only a few steps</p>
        <p><Link to='client'><button className={styles.pageButton}>Start</button></Link></p>
    </div>
);

export default StartPage;