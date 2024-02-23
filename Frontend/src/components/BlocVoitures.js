import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlocVoitures = () => {

    const listeVoitures = JSON.parse(localStorage.getItem('liste de voitures'));
    console.log(listeVoitures)

    const filterKilometrage = Array.from(
        new Set(listeVoitures.map(voiture => voiture.km))
    );

    const filterPrice = Array.from(
        new Set(listeVoitures.map(voiture => voiture.price))
    );

    const filterYears = Array.from(
        new Set(listeVoitures.map(voiture => voiture.yearsCirculation))
    );

    const minKilometrage = Math.min(...filterKilometrage);
    const maxKilometrage = Math.max(...filterKilometrage);

    const minPrice = Math.min(...filterPrice);
    const maxPrice = Math.max(...filterPrice);

    const minYear = Math.min(...filterYears);
    const maxYear = Math.max(...filterYears);

    const [kilometrage, setKilometrage] = useState(maxKilometrage);
    const [price, setPrice] = useState(maxPrice);
    const [year, setYear] = useState(maxYear);

    /*const updateKilometrage = (e) => {
        const { value } = e.target;
        setKilometrage(value);
    };

    const updatePrice = (e) => {
        const { value } = e.target;
        setPrice(value);
    };

    const updateYear = (e) => {
        const { value } = e.target;
        setYear(value);
    };*/

    const filterVoiture = listeVoitures.filter(
        (voiture) => (voiture.km >= minKilometrage && voiture.km <= kilometrage)
            && (voiture.price >= minPrice && voiture.price <= price)
            && (voiture.yearsCirculation >= minYear && voiture.yearsCirculation <= year)
    );

    /*const reinitializeKm = () => {
        setKilometrage(maxKilometrage)
    };

    const reinitializePrice = () => {
        setPrice(maxPrice)
    };

    const reinitializeYear = () => {
        setYear(maxYear)
    };*/

    return (
        <>
            <div className="conteneurVoitures">
                <h1>Découvrez nos voitures</h1>
                <div className="filtreVoiture">
                    <div className="filtreKilometrage">
                        <label htmlFor="Kilometrage">Kilométrage</label>
                        <input
                            type="range"
                            name="kilometrage"
                            min={minKilometrage}
                            max={maxKilometrage}
                            defaultValue={maxKilometrage}
                            onChange={(e) => setKilometrage(e.target.value)}
                        />
                        <span>{minKilometrage} - {kilometrage} km </span>
                        <button className="boutonFiltre"
                            onClick={() => {
                                setKilometrage(maxKilometrage),
                                    document.querySelector('input[name="kilometrage"]').value = maxKilometrage;
                            }
                            }
                        >
                            Réinitialiser
                        </button>
                    </div>

                    <div className="filtrePrix">
                        <label htmlFor="price">Prix</label>
                        <input
                            type="range"
                            name="price"
                            min={minPrice}
                            max={maxPrice}
                            defaultValue={maxPrice}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <span>{minPrice} - {price} € </span>
                        <button className="boutonFiltre"
                            onClick={() => {
                                setPrice(maxPrice),
                                    document.querySelector('input[name="price"]').value = maxPrice;
                            }
                            }
                        >
                            Réinitialiser
                        </button>
                    </div>

                    <div className="filtreAnnee">
                        <label htmlFor="years">Année</label>
                        <input
                            type="range"
                            name="years"
                            min={minYear}
                            max={maxYear}
                            defaultValue={maxYear}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        <span>{minYear} - {year} </span>
                        <button className="boutonFiltre"
                            onClick={() => {
                                setYear(maxYear),
                                    document.querySelector('input[name="years"]').value = maxYear;
                            }
                            }
                        >
                            Réinitialiser
                        </button>
                    </div>
                </div>

                <div>
                    <div className="listeDeVoitures">
                        {filterVoiture.map((voiture, index) => (
                            <div className="voiture" key={index}>
                                <img className="imageVoiture" src={voiture.image} />
                                <p>Kilométrage : {voiture.km} km</p>
                                <p>Prix : {voiture.price} €</p>
                                <p>Mise en circulation en : {voiture.yearsCirculation}</p>
                                <Link to={`/voiture/${voiture.id}`}>
                                    <button className="detailsVoiture">En savoir plus</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        </>
    );
};

export default BlocVoitures;