import React from 'react';
import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';

const Footer = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [date, setDate] = useState("");
    const [creneau, setCreneau] = useState("");
    const [heure, setHeure] = useState("");

    const heureMatin = ["08h45 - 09h00", "09h00 - 09h15", "09h15 - 09h30", "09h30 - 09h45",
        "09h45 - 10h00", "10h00 - 10h15", "10h15 - 10h30", "10h30 - 10h45", "10h45 - 11h00",
        "11h00 - 11h15", "11h15 - 11h30", "11h30 - 11h45", "11h45 - 12h00"];

    const heureMidi = ["14h00 - 14h15", "14h15 - 14h30", "14h30 - 14h45", "14h45 - 15h00",
        "15h00 - 15h15", "15h15 - 15h30", "15h30 - 15h45", "15h45 - 16h00", "16h00 - 16h15",
        "16h15 - 16h30", "16h30 - 16h45", "16h45 - 17h00", "17h00 - 17h15", "17h15 - 17h30",
        "17h30 - 17h45", "17h45 - 18h00"];

    //const ouvertOuFermer = localStorage.getItem('ouvert ou fermer');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        ReactModal.setAppElement('body');
    }, []);

    const dateRendezVous = new Date(date).getDay();

    const priseRdv = (e) => {
        e.preventDefault();
        alert("Vous avez pris rendez-vous pour le " + date + " à " + heure);
        closeModal();
    }

    if (dateRendezVous == 0) {
        alert('Nous ne sommes pas ouvert le dimanche, veuillez saisir une autre date');
    }

    const openModal2 = () => {
        setIsModalOpen2(true);
    };

    const closeModal2 = () => {
        setIsModalOpen2(false);
    };

    return (
        <div className="footer">
            <div className="horaireGarage">
                <div>
                    <p>Lun : 08h45 - 12h00, 14h00 - 18h00</p>
                    <p> Mar : 08h45 - 12h00, 14h00 - 18h00</p>
                </div>
                <div>
                    <p>Mer : 08h45 - 12h00, 14h00 - 18h00</p>
                    <p>Jeu : 08h45 - 12h00, 14h00 - 18h00</p>
                </div>
                <div>
                    <p>Ven : 08h45 - 12h00, 14h00 - 18h00</p>
                    <p>Sam : 08h45 - 12h00</p>
                </div>
                <div>
                    <p>Dim : Fermé</p>
                </div>
            </div>

            <div>
                <button className="buttonRendezVous" onClick={openModal}>Je prends rendez-vous</button>

                <ReactModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    className="modalRdv"
                >
                    <form onSubmit={priseRdv} className="priseRdv">
                        <div>
                            <legend>
                                Votre rendez-vous
                            </legend>
                            <input type="text" name="nom" id="nom" placeholder="Votre nom" required></input>
                            <label htmlFor="nom"></label>

                            <input type="text" name="prenom" id="prenom" placeholder="Votre prénom" required></input>
                            <label htmlFor="prenom"></label>

                            <input type="email" name="email" id="email" placeholder="Votre email" required></input>
                            <label htmlFor="email"></label>

                            <input type="tel" name="phone" id="phone" placeholder="Votre numéro de téléphone" required></input>
                            <label htmlFor="phone"></label>

                            <input type="date" id="date" name="date" min="2024-01-01" max="2024-12-31" onChange={e => setDate(e.target.value)} required></input>
                            <label htmlFor="date"></label>

                            {dateRendezVous === 0 ?
                                null
                                :
                                dateRendezVous !== 6 ?
                                    <div className="choixCreneau">
                                        <label htmlFor="creneau" id="creneau">Choisissez votre créneau horaire</label>
                                        <input type="radio" id="creneau" name="creneau" onChange={(e) => setCreneau("Matin")} required></input>Matin
                                        <input type="radio" id="creneau" name="creneau" onChange={(e) => setCreneau("Après-midi")} required></input>Après-midi
                                    </div>
                                    :
                                    null
                            }

                            {dateRendezVous === 6 || creneau === "Matin" ?
                                <select
                                    name="heureRendezVous"
                                    id="heureRendezVous"
                                    className="selectRendezVous"
                                    value={heure}
                                    onChange={(e) => setHeure(e.target.value)}
                                    required
                                >
                                    <option value="">Veuillez choisir votre heure de rendez-vous</option>
                                    {heureMatin.map((horaire, index) => (
                                        <option key={index} value={horaire}>
                                            {horaire}
                                        </option>
                                    ))}
                                </select>
                                :
                                creneau === "Après-midi" ?
                                    <select
                                        name="heureRendezVous"
                                        id="heureRendezVous"
                                        className="selectRendezVous"
                                        value={heure}
                                        onChange={(e) => setHeure(e.target.value)}
                                        required
                                    >
                                        <option value="">Veuillez choisir votre heure de rendez-vous</option>
                                        {heureMidi.map((horaire, index) => (
                                            <option key={index} value={horaire}>
                                                {horaire}
                                            </option>
                                        ))}
                                    </select>
                                    :
                                    null
                            }

                            {dateRendezVous === 0 ?
                                null
                                :
                                < div className="boutonRendezVousFormulaire">
                                    <button type="submit" id="confirmer">Confirmer</button>
                                    <button id="annuler" onClick={closeModal}>Annuler</button>
                                </div>
                            }
                        </div>
                    </form>
                </ReactModal>
                <button className="boutonContactDetailVoitureTelephone" onClick={openModal2}>Téléphone</button>
                <ReactModal
                    isOpen={isModalOpen2}
                    onRequestClose={closeModal2}
                    className="myModal"
                >
                    <h3>Notre numéro de téléphone : </h3>
                    <p>06 06 06 06 06</p>
                    <button onClick={closeModal2}>Fermer</button>
                </ReactModal>
            </div>
            {/*<div className="AffichageOuvertOUFermer">
                <h1>Nous sommes actuellement {ouvertOuFermer}</h1>
                        </div>*/}
        </div >
    );
};

export default Footer;