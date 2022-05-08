import styles from "./back-button.module.css";
import {Link} from "react-router-dom";
import {FC} from "react";

interface IBackButton {
    to: string
}

const BackButton: FC<IBackButton> = ({to}) => (
    <Link to={to}>
        <button className={styles.backButton}>
            Back
        </button>
    </Link>
);

export default BackButton;