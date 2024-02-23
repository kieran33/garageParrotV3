import React from 'react';
import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";

const ApprouverOuSupprimerAvis = () => {

    const [listeAvis, setListeAvis] = useState([]);

    useEffect(() => {
        const avisNonApprouve = JSON.parse(localStorage.getItem('liste des avis non approuvés'));
        setListeAvis(avisNonApprouve);
    }, []);

    return (
        <div className="listeAvis">
            <h3>Espace modération des avis</h3>
            {listeAvis.map((avis, index) => (
                <div className="avisClient" index={index}>
                    <div className="nomClientNote">
                        <h4>
                            {avis.name}
                        </h4>
                        <div>
                            {[...Array(avis.note)].map(() => {
                                return (
                                    <div className="positionStarRating">
                                        <input
                                            type="radio"
                                            name="note"
                                            id="note"
                                            className="radioStar"
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
                    <div>
                        <button
                            type="button"
                            id="buttonSupprimerAvis"
                            name="buttonSupprimerAvis"
                            value={avis.name}
                            onClick={(e) => {
                                e.preventDefault();
                                const updateListeAvis = listeAvis.filter(avisFilter => avisFilter.name !== avis.name);
                                localStorage.setItem('liste des avis non approuvés', JSON.stringify(updateListeAvis));
                                setListeAvis(updateListeAvis);
                                alert(`L'avis de ${avis.name} à bien été supprimer`);
                            }}
                        >
                            Supprimer
                        </button>
                        <button
                            type="button"
                            id="buttonApprouverAvis"
                            name="buttonApprouverAvis"
                            value={avis.name}
                            onClick={(e) => {
                                e.preventDefault();
                                const updateListeAvis = JSON.parse(localStorage.getItem('liste des avis'));
                                const updateListeAvisApprouve = [...updateListeAvis, avis];
                                localStorage.setItem('liste des avis', JSON.stringify(updateListeAvisApprouve));

                                const updateListeAvisFilter = listeAvis.filter(avisFilter => avisFilter.name !== avis.name);
                                localStorage.setItem('liste des avis non approuvés', JSON.stringify(updateListeAvisFilter));
                                setListeAvis(updateListeAvisFilter);
                            }}
                        >
                            Approuver
                        </button>
                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default ApprouverOuSupprimerAvis;