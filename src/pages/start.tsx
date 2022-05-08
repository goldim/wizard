import styles from "./common.module.css"
import NavButton from "../components/nav-button";

const StartPage = () => (
    <div className={styles.content}>
        <h1>Hello There!</h1>
        <p>Let's buy some insurance. It is going to take only a few steps</p>
        <p>
            <NavButton to='client'>Start</NavButton>
        </p>
    </div>
);

export default StartPage;