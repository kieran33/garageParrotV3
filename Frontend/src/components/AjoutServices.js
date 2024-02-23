import React from 'react';
import { useState } from 'react';
import serviceDefault from '../image/garage-service-default.jpg'

const AjoutServices = () => {

    const [newServices, setNewServices] = useState(getDefaultService());

    function getDefaultService() {
        return {
            name: "service test",
            content: "lorem ipsum",
            image: serviceDefault,
        };
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newValue = value;

        setNewServices({
            ...newServices,
            [name]: newValue,
        });
    };

    const handleAddService = () => {
        const getListeServicesUpdate = JSON.parse(localStorage.getItem('liste de services')) || []
        // les services mises à jour
        const updateServices = [...getListeServicesUpdate, newServices];
        // Mettre à jour les services dans le localstorage
        localStorage.setItem('liste de services', JSON.stringify(updateServices));
        //reprendre la valeur par défaut
        setNewServices(getDefaultService());
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            setNewServices({
                ...newServices,
                image: URL.createObjectURL(img)
            })
        }
    }

    return (
        <div className="elementDashboardAdmin">
            <input
                type="text"
                name="name"
                id="name"
                className="intituleService"
                placeholder="L'intitulé du service"
                onChange={handleInputChange}
                required
            />
            <label htmlFor="intituleService"></label>

            <textarea
                name="content"
                id="content"
                cols="100"
                rows="5"
                placeholder="Explication du service"
                onChange={handleInputChange}
                required
            />
            <label htmlFor="content"></label>

            <input
                type="file"
                name="uploadImage"
                id="uploadImage"
                onChange={handleImageChange}
            />
            <label htmlFor="uploadImage"></label>
            <button className="buttonAjoutService" onClick={handleAddService}>Ajouter</button>
        </div>
    );
};

export default AjoutServices;