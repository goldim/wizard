import countries from "../utils/countries.json";
import packages from "../utils/packages.json";

export interface ICountry {
    name: string,
    rate: number,
    code: string
}

function getCurrencyCodeByCountryName(countryName: string): string {
    const found = getCountryByName(countryName);
    if (found){
        return found.code;
    } else {
        return "";
    }
}

function getCountryByName(countryName: string): ICountry | undefined {
    return countries.find((country: ICountry) => country.name === countryName);
}

function getRateByCountryName(countryName: string): number {
    const found = getCountryByName(countryName);
    if (found){
        return found.rate;
    } else {
        return 0;
    }
}

export class Package {
    static getPackages(){
        return packages;
    }

    static calculatePremium(countryName: string, age: number): string {
        const premium = 10 * age * getRateByCountryName(countryName);
        const currencyCode = getCurrencyCodeByCountryName(countryName)
        return `${premium}${currencyCode}`;
    }
}