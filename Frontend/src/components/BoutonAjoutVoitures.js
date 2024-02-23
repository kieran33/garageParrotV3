import React from 'react';
import { useEffect, useState } from 'react';
import voitureDefault from "../image/voiture-mystere.jpg"
import ReactModal from 'react-modal';

const BoutonAjoutVoitures = () => {

    const [newVoitures, setNewVoitures] = useState(getDefaultVoiture());
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        ReactModal.setAppElement('body');
    }, []);

    function getNextVoitureId() {
        const voituresExisting = JSON.parse(localStorage.getItem('liste de voitures')) || [];
        const lastVoiture = voituresExisting[voituresExisting.length - 1];
        return lastVoiture ? lastVoiture.id + 1 : 1;
    }

    function getDefaultVoiture() {
        return {
            id: getNextVoitureId(),
            brand: "marque par default",
            km: 10000,
            price: 15000,
            yearsCirculation: 2022,
            image: voitureDefault,
        };
    };

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        const newValue = type === "number" ? Number(value) : value;

        setNewVoitures({
            ...newVoitures,
            [name]: newValue,
        });
    };

    const handleAddVoiture = () => {
        const voituresExisting = JSON.parse(localStorage.getItem('liste de voitures')) || [];
        const updateVoitures = [...voituresExisting, newVoitures];
        localStorage.setItem('liste de voitures', JSON.stringify(updateVoitures));
        setNewVoitures(getDefaultVoiture());
        setIsModalOpen(false);
        console.log(updateVoitures);
    }

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            setNewVoitures({
                ...newVoitures,
                image: URL.createObjectURL(img)
            })
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className="boutonAjouterVoiture" onClick={openModal}>Ajouter une voiture</button>
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <form className="ajoutVoiture" onSubmit={handleAddVoiture}>
                    <legend>Ajouter une voiture</legend>
                    <input
                        type="text"
                        name="brand"
                        id="brand"
                        placeholder="La marque de la voiture"
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="brand"></label>

                    <input
                        type="number"
                        min="0"
                        step="5000"
                        name="km"
                        id="km"
                        placeholder="Nombre de Km"
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="km"></label>

                    <input
                        type="number"
                        min="0"
                        step="1000"
                        name="price"
                        id="price"
                        placeholder="Prix de la voiture"
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="price"></label>

                    <input
                        type="number"
                        min="1980"
                        defaultValue="2010"
                        step="1"
                        name="yearsCirculation"
                        id="yearsCirculation"
                        placeholder="Année de la voiture"
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="yearsCirculation"></label>

                    <input
                        type="file"
                        name="uploadImage"
                        id="uploadImage"
                        onChange={handleImageChange}
                    />
                    <label htmlFor="uploadImage"></label>
                    <div>
                        <button className="buttonAjoutService" type="submit">Ajouter</button>
                        <button className="buttonAnnulerService" onClick={closeModal}>Fermer</button>
                    </div>
                </form>
            </ReactModal>
        </div>
    );
};

export default BoutonAjoutVoitures;