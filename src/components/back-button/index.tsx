import styles from "./back-button.module.css";
import {useNavigate} from "react-router-dom";
import {FC} from "react";

interface IBackButton {
    to: string
}

const BackButton: FC<IBackButton> = ({to}) => {
    const navigate = useNavigate();

    const onBack = () => {
        navigate(to);
    }

    return (<button className={styles.backButton} onClick={onBack}>Back</button>);
}

export default BackButton;