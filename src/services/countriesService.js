export const fetchCountries = () => {
    return fetch("https://restcountries.eu/rest/v2/all");
};


export const fetchCountryDetails = (countryCode) => {
    let api_url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
    return fetch(api_url);
};

export const fetchCountryByBorder = (border) => {
    return fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
};