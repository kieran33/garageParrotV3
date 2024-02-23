import React from 'react';
import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';

const SeConnecter = () => {

    /*
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [listeEmployes, setListeEmployes] = useState('');

    const navigate = useNavigate();

    const etatConnexion = localStorage.getItem('etat connexion');
    const admin = localStorage.getItem('compte admin');

    useEffect(() => {
        const getEmployes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/get', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const employes = JSON.stringify(response.data)
                setListeEmployes(Array.from(new Set(JSON.parse(employes))));
                console.log('Succès:', response.data);
            } catch (error) {
                console.error('Erreur:', error.response ? error.response.data : error.message);
            }
        }
        getEmployes();
    }, []);

    const tableauEmployes = Array.from(
        new Set(listeEmployes)
    );

    const connexion = (e) => {
        //e.preventDefault();
        tableauEmployes.map(employe => {
            if ((employe.email === email && employe.password === password)) {
                localStorage.setItem('etat connexion', true);
                console.log('Bravo vous êtes connecté', email, ' ', password);
                navigate("/");
                location.reload();
            } else if (email === "vincent@vincent" && password === "parrot") {
                localStorage.setItem('etat connexion', true);
                localStorage.setItem('compte admin', true);
                navigate("/");
                location.reload();
            } else {
                console.log('Compte employé introuvable');
            }
        })
    };

    const deconnexion = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        localStorage.removeItem('etat connexion');
        if (localStorage.getItem('compte admin')) {
            localStorage.removeItem('compte admin');
        }
        navigate("/");
        location.reload();
    }*/


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const connexion = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email: email,
                password: password
            });
            // Vous pouvez ajuster cette partie en fonction de la réponse de votre serveur
            if (response.data.success) {
                navigate("/");
            } else {
                alert('Identifiants incorrects.');
            }
        } catch (error) {
            console.error('Erreur de connexion:', error);
            alert('Erreur lors de la tentative de connexion.');
        }
    };

    // La fonction deconnexion n'est peut-être pas nécessaire si vous gérez les sessions sur le serveur

    console.log(email, password)

    return (

        <div>
            <Navigation />
            <h1>Espace professionnel</h1>
            <div className="conteneurConnexion">
                <form className="formulaireConnexion" onSubmit={connexion}>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="votre email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email"></label>

                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password"></label>

                        <div className="boutonConnexion">
                            <button type="submit">
                                Se connecter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};




{/*<div>
                <Navigation />
                <h1>Espace professionnel</h1>
                <div className="conteneurConnexion">
                    <form className="formulaireConnexion">
                        {admin === "true" ?
                            <>
                                <legend>Vous êtes connecté en tant qu'admin</legend>
                                <button onClick={deconnexion}>
                                    Se déconnecter
                                </button>
                            </>
                            :
                            etatConnexion === "true" && admin !== "true" ?
                                <>
                                    <legend>Vous êtes connecté en tant qu'employé</legend>
                                    <button onClick={deconnexion}>
                                        Se déconnecter
                                    </button>
                                </>
                                :
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="votre email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="email"></label>

                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="votre mot de passe"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="password"></label>

                                    <div className="boutonConnexion">
                                        <button onClick={connexion}>
                                            Se connecter
                                        </button>
                                    </div>
                                </div>
                        }
                    </form>
                </div>
                <Footer />
                    </div >*/}

export default SeConnecter;