import { Link } from 'react-router-dom'
import styles from "./common.module.css";

const SummaryPage = () => (
    <div>
        <h1>Summary</h1>
        <p>Name: </p>
        <p>Age: </p>
        <p>Where do you live: </p>
        <p>Package: </p>
        <p>Premium: </p>
        <p className={styles.centered}>
            <Link to={"/client"}><button>Back</button></Link>
            <Link to={"/"}><button>Buy</button></Link>
        </p>
    </div>
);

export default SummaryPage;