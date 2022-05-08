import styles from "./select-country.module.css";
import {ChangeEventHandler, FC} from "react";

interface ISelectCountryProps {
    countries: string[],
    onChange: ChangeEventHandler<HTMLSelectElement>
}

const SelectCountry: FC<ISelectCountryProps> = ({countries, onChange}) => (
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
);

export default SelectCountry;