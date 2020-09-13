import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

function Cards(props){
    return (
        <div>
            {props.countries.length > 0 ?
            <ul>
                {props.countries.filter(country => {
                    console.log(document.getElementById("sarch"));
                    const regex = new RegExp(document.getElementById("search").nodeValue, 'gi');
                    return country.name.match(regex)
                })
                .map(country => (
                    <li className="card" key={country.alpha3Code}>
                        <div className="card__image" style={{backgroundImage: `url(${country.flag})`}}></div>
                        <div className="card__text">
                            <Link className="card__link" to={{pathname: country.alpha3Code, state:{name:country.name}}}>{country.name}</Link>
                            <ul>
                                <li className="card__properties"><span className="card__bold">Population: </span>{country.population.toLocaleString('en-US')}</li>
                                <li className="card__properties"><span className="card__bold">Region: </span>{country.region}</li>
                                <li className="card__properties"><span className="card__bold">Capital: </span>{country.capital}</li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
            : <div>No countries found </div>}
        </div>
    )
}

export default Cards;
