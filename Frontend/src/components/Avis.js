import React from 'react';
import AjouterAvis from './AjouterAvis';
import { FaStar } from "react-icons/fa";

const Avis = () => {

    const updateListeAvis = JSON.parse(localStorage.getItem('liste des avis'));

    return (
        <div className="conteneurAvis">
            <h1>Nos clients parle de nous</h1>
            <div className="listeAvis">
                {updateListeAvis.map((avis, index) => (
                    < div className="avisClient" key={index} >
                        <div className="nomClientNote">
                            <h4>{avis.name}</h4>
                            <div>
                                {[...Array(avis.note)].map(() => {
                                    return (
                                        <div className="positionStarRating">
                                            <input
                                                type="radio"
                                                name="note"
                                                className="radioStar"
                                                id="note"
                                                value={avis.note}
                                            />
                                            <label htmlFor="note" />

                                            <FaStar
                                                value={avis.note}
                                                size={25}
                                                color="#ffc107"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <p>{avis.message}</p>
                    </div>
                ))}
            </div>
            <AjouterAvis />
        </div >
    );
};

export default Avis;