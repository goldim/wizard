import {Link} from 'react-router-dom'
import styles from "./common.module.css";
import {useEffect, useState} from "react";
import BackButton from "../components/back-button";
import {Package} from "../services/package";

const SummaryPage = () => {
    const [age, setAge] = useState<any>();
    const [name, setName] = useState<string | null>();
    const [country, setCountry] = useState<string | null>();
    const [pkg, setPkg] = useState<string | null>();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        setAge(query.get('age'));
        setName(query.get('name'));
        setCountry(query.get('country'));
        setPkg(query.get('package'));
    }, []);

    return (
        <div className={styles.content}>
            <h1>Summary</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Where do you live: {country}</p>
            <p>Package: {pkg}</p>
            <p>Premium: {Package.calculatePremium(!country ? "": country, age)}</p>
            <p className={styles.centered}>
                <BackButton to={"/client"}/>
                <Link to={"/"}><button className={styles.pageButton}>Buy</button></Link>
            </p>
        </div>
    );
}

export default SummaryPage;