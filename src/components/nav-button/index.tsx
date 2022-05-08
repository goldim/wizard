import styles from "./nav-button.module.css";
import {Link} from "react-router-dom";
import {FC} from "react";

interface INavButtonProps {
    to: string,
    children: string
}

const NavButton: FC<INavButtonProps> = ({to, children}) => (
    <Link to={to}>
        <button className={styles.navButton}>{children}</button>
    </Link>
);


export default NavButton;