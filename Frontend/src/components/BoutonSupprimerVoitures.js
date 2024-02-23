import React from 'react';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

const BoutonSupprimerVoitures = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectVoitureId, setSelectVoitureId] = useState('');
    const [listeVoiture, setListeVoiture] = useState([]);

    useEffect(() => {
        ReactModal.setAppElement('body');
    }, []);

    useEffect(() => {
        //Récupérer les voitures actuels du localStorage
        const getListeVoiture = JSON.parse(localStorage.getItem('liste de voitures')) || [];
        setListeVoiture(getListeVoiture);
    }, [selectVoitureId]);

    const supprimerVoiture = (e) => {
        e.preventDefault();

        const updateIdVoiture = listeVoiture.filter(voiture => voiture.id !== selectVoitureId);

        localStorage.setItem('liste de voitures', JSON.stringify(updateIdVoiture));

        setListeVoiture(updateIdVoiture);

        alert(`La voiture numéro ${selectVoitureId} à bien été supprimer`);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className="boutonSupprimerVoiture" onClick={openModal}>Supprimer une voiture</button>
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <form className="supprimerVoiture" onSubmit={supprimerVoiture}>
                    <legend>Quelle voiture souhaitez-vous supprimer ?</legend>
                    <select
                        name="voituresSuppression"
                        id="voituresSuppression"
                        value={selectVoitureId}
                        onChange={(e) => setSelectVoitureId(Number(e.target.value))}
                        required
                    >
                        <option value="">Veuillez choisir la voiture à supprimer</option>
                        {listeVoiture.map((voiture, index) => (
                            <option key={index} value={voiture.id}>
                                Voiture numéro {voiture.id}
                            </option>
                        ))}
                    </select>
                    <div>
                        <button className="bouttonSupprimer" type="submit">Supprimer</button>
                        <button className="bouttonAnnulerSupre" onClick={closeModal}>Fermer</button>
                    </div>
                </form>
            </ReactModal>
        </div>
    );
};

export default BoutonSupprimerVoitures;