import {useNavigate} from 'react-router-dom'

import styles from "./common.module.css"
import {ChangeEvent, FC, FormEvent, useState} from "react";
import BackButton from "../components/back-button";
import {Package} from "../services/package";

function getCountries(){
    return ["Hong Kong", "USA", "Australia"];
}

interface ISelectCountry {
    countries: string[],
    onChange: any
}

const SelectCountry: FC<ISelectCountry> = ({countries, onChange}) => (
    <div>
        <label htmlFor="country">Where do you live</label>
        <select className={styles.clientFormInput} id="country" name="country" onChange={onChange}>
            <option>-</option>
            {
                countries.map((countryName: string, index: number) => (
                    <option key={index} value={countryName}>
                        {countryName}
                    </option>
                ))
            }
        </select>
    </div>
);

interface IPackage {
    label: string,
    value: string
}

interface ISelectPackage {
    packages: IPackage[]
}

const SelectPackage: FC<ISelectPackage> = ({packages}) => (
    <div style={{textAlign:"left"}}>
        {
            packages.map((pkg: IPackage, index: number) => (
                <div key={index}><input type="radio" name="package" defaultChecked={ (!index) } value={pkg.value}/>
                    {pkg.label}
                </div>)
            )
        }
    </div>
);

const ClientPage = () => {
    const [age, setAge] = useState<number>(0);
    const [countryName, setCountryName] = useState<string>("");
    const navigate = useNavigate();

    const onSubmit = (e: FormEvent) => {
        if (age > 100){
            e.preventDefault();
            navigate("/age-error");
        }
    }

    const onChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(e.target.value));
    }

    const onChangeCountry = (e: ChangeEvent<HTMLInputElement>) => {
        setCountryName(e.target.value);
    }

    return (
        <div className={styles.content}>
            <h1>Tell us about yourself</h1>
            <form onSubmit={onSubmit} action={"/summary"} className={styles.formContainer}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input className={styles.clientFormInput} id="name" type="text" placeholder="Add text" name={"name"} required={true}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input className={styles.clientFormInput} type="number" id="age" name="age" onChange={onChangeAge} value={age}/>
                </div>
                <SelectCountry countries={getCountries()} onChange={onChangeCountry}/>
                <SelectPackage packages={Package.getPackages()}/>
                <p className={styles.premium}>Your premium is: {Package.calculatePremium(countryName, age)}</p>
                <p className={styles.centered}>
                    <BackButton to={"/"}/>
                    <button type="submit" className={styles.pageButton}>Next</button>
                </p>
            </form>
        </div>
    );
}

export default ClientPage;