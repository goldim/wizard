import styles from "./common.module.css"
import NavButton from "../components/nav-button";

const AgeErrorPage = () => (
    <div className={styles.content}>
        <h1>Oops</h1>
        <p>Your age is over our accepted limit.</p>
        <p>We are sorry but we can't insure you now.</p>
        <p>
            <NavButton to='/'>Ok :(</NavButton>
        </p>
    </div>
);

export default AgeErrorPage;