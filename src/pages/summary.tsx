import styles from "./common.module.css";
import BackButton from "../components/back-button";
import {Package} from "../services/package";
import NavButton from "../components/nav-button";
import {useLocation} from "react-router-dom";

interface ISummaryState {
    name: string
    age: number
    pkg: string
    countryName: string
}

const SummaryPage = () => {
    const location = useLocation();
    const state: ISummaryState = location.state as ISummaryState;

    return (
        <div className={styles.page}>
            <h1>Summary</h1>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
            <p>Where do you live: {state.countryName}</p>
            <p>Package: {state.pkg}</p>
            <p>Premium: {Package.calculatePremium(state.countryName, state.age)}</p>
            <p className={styles.centered}>
                <BackButton to={"/client"}/>
                <NavButton to={"/"}>Buy</NavButton>
            </p>
        </div>
    );
}

export default SummaryPage;