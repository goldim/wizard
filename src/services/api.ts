import countries from "../utils/countries.json";
import {ICountry, Package} from "./package";

export function getCountries(): string[] {
    return countries.map((country: ICountry) => country.name);
}

export interface IPackage {
    label: string,
    value: string
}

export type Packages = IPackage[];

export function getPackages(){
    return Package.getPackages();
}