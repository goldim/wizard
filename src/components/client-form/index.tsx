import styles from "./client-form.module.css";
import navButtonStyles from "../nav-button/nav-button.module.css"

import {useNavigate} from "react-router-dom";
import {ChangeEvent, FC, FormEvent, useState} from "react";
import {Package} from "../../services/package";
import BackButton from "../back-button";
import SelectCountry from "../select-country";
import {getCountries, getPackages} from "../../services/api";
import PackageGroup from "../package-group";

interface IClientFormProps {
}

const MAX_AGE = 100;

const ClientForm: FC<IClientFormProps> = () => {
    const [age, setAge] = useState<number>(0);
    const [countryName, setCountryName] = useState<string>("");
    const navigate = useNavigate();

    const onSubmit = (e: FormEvent) => {
        if (age > MAX_AGE){
            e.preventDefault();
            navigate("/age-error");
        }
    }

    const onChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(e.target.value));
    }

    const onChangeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
        setCountryName(e.target.value);
    }

    return  (
        <form onSubmit={onSubmit} action={"/summary"} className={styles.formContainer}>
            <div className={styles.inputGroup}>
                    <label className={styles.inputGroupLeft} htmlFor="name">Name</label>
                    <input className={styles.clientFormInput} id="name" type="text" placeholder="Add text" name={"name"} required={true}/>
                    <label className={styles.inputGroupLeft} htmlFor="age">Age</label>
                    <input className={styles.clientFormInput} type="number" id="age" name="age" onChange={onChangeAge} value={age}/>
                    <label className={styles.inputGroupLeft} htmlFor="country">Where do you live</label>
                    <SelectCountry countries={getCountries()} onChange={onChangeCountry}/>
                    <div></div>
                    <PackageGroup packages={getPackages()}/>
            </div>

            <p className={styles.premium}>Your premium is: {Package.calculatePremium(countryName, age)}</p>
            <p>
                <BackButton to={"/"}/>
                <button type="submit" className={navButtonStyles.navButton}>Next</button>
            </p>
        </form>
    );
}

export default ClientForm;