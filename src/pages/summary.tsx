import styles from "./common.module.css";
import BackButton from "../components/back-button";
import {Package} from "../services/package";
import NavButton from "../components/nav-button";
import {useLocation} from "react-router-dom";

const SummaryPage = () => {
    const location: any = useLocation();

    return (
        <div className={styles.content}>
            <h1>Summary</h1>
            <p>Name: {location.state.name}</p>
            <p>Age: {location.state.age}</p>
            <p>Where do you live: {location.state.countryName}</p>
            <p>Package: {location.state.pkg}</p>
            <p>Premium: {Package.calculatePremium(!location.state.countryName ? "": location.state.countryName, location.state.age)}</p>
            <p className={styles.centered}>
                <BackButton to={"/client"}/>
                <NavButton to={"/"}>Buy</NavButton>
            </p>
        </div>
    );
}

export default SummaryPage;