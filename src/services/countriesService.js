export const fetchCountries = () => {
    return fetch("https://restcountries.eu/rest/v2/all");
};


export const fetchCountryDetails = (countryCode) => {
    return fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
};

export const fetchCountryByBorder = (border) => {
    return fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
};