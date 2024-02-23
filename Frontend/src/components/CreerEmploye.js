import React, { useState } from 'react';
import axios from 'axios';

const CreerEmploye = () => {

    const [newUser, setNewUser] = useState(getDefaultUser());

    function getDefaultUser() {
        return {
            email: "",
            password: "",
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewUser({
            ...newUser,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/CreateUser', newUser, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Succès:', response.data);
            setNewUser(getDefaultUser());
        } catch (error) {
            console.error('Erreur:', error.response ? error.response.data : error.message);
        }
    }

    return (
        <div className="elementDashboardAdmin">
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={newUser.email}
                required
            />

            <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                onChange={handleInputChange}
                value={newUser.password}
                required
            />

            <button onClick={handleSubmit}>Créer</button>
        </div>
    );
};

export default CreerEmploye;