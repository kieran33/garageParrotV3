import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SupprimerEmploye = () => {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get('http://localhost:3001/api/get')
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (email) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer définitivement ce compte employé ?")) {
            axios.delete(`http://localhost:3001/api/remove/${email}`);
            setTimeout(() => loadData(), 500);
        }
    }

    return (
        <div className="elementDashboardAdmin" id="supprimerEmploye">
            <h3>Liste des employés</h3>
            <div>
                {data.map((employe, index) => (
                    <div index={index} className="employe">
                        <p>employé : {employe.email}</p>
                        <button onClick={() => handleDelete(employe.email)}>Supprimer</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupprimerEmploye;