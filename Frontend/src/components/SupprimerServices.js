import React from 'react';
import { useState, useEffect } from 'react';

const SupprimerServices = () => {

    const [selectService, setSelectService] = useState('');
    const [listeName, setListeName] = useState([]);


    useEffect(() => {
        //Récupérer les services actuels du localStorage
        const getListeServicesUpdate = JSON.parse(localStorage.getItem('liste de services')) || [];
        setListeName(getListeServicesUpdate);
    }, [selectService]);


    const supprimerService = (e) => {
        e.preventDefault();

        const updateServiceName = listeName.filter(service => service.name !== selectService);

        localStorage.setItem('liste de services', JSON.stringify(updateServiceName));

        setListeName(updateServiceName);

        alert(`Le service ${selectService} à bien été supprimer`);
    };

    return (
        <div className="elementDashboardAdmin">
            <select
                name="servicesSuppression"
                id="servicesSuppression"
                value={selectService}
                onChange={(e) => setSelectService(e.target.value)}
                required
            >
                <option value="">Veuillez choisir le service à supprimer</option>
                {listeName.map((service, index) => (
                    <option key={index} value={service.name}>
                        {service.name}
                    </option>
                ))}
            </select>
            <button className="boutonSupprimer" onClick={supprimerService}>Supprimer</button>
        </div>
    );
};

export default SupprimerServices;