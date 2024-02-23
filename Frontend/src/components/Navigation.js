import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../image/logo_garave_v_parrot.jpg'

const Navigation = () => {

    const navigate = useNavigate();

    const goConnexion = () => {
        navigate("/connexion");
    }

    const goAccueil = () => {
        navigate("/");
    }

    const ouvertOuFermer = localStorage.getItem('ouvert ou fermer');
    const etatConnexion = localStorage.getItem('etat connexion');
    const admin = localStorage.getItem('compte admin');

    return (
        <div>
            {(admin !== "true" || etatConnexion !== "true") && ouvertOuFermer === 'fermer' ?
                <div className="justeLeBouttonEspacePro">
                    <button className="buttonEspacePro" onClick={goConnexion}>Espace professionnel</button>
                </div>
                :
                <div className="navigation">
                    <div>
                        <img src={logo} className="garageLogo" width="150" height="auto" alt="logo garage v parrot"
                            onClick={goAccueil}
                        />
                    </div>
                    <div className="navigationOnglet">
                        <NavLink to={"/"}>
                            Accueil
                        </NavLink>
                        <NavLink to={"/occasions"}>
                            Nos occasions
                        </NavLink>
                        <NavLink to={"/contact"}>
                            Contact
                        </NavLink>
                        {admin === "true" ?
                            <NavLink to={"/dashboard-admin"}>
                                Dashboard
                            </NavLink>
                            :
                            null
                        }
                        {etatConnexion === "true" && admin !== "true" ?
                            <NavLink to={"/dashboard-employe"}>
                                Dashboard
                            </NavLink>
                            :
                            null
                        }
                        <button className="boutonEspacePro" onClick={goConnexion}>Espace professionnel</button>
                    </div>
                </div>
            }
        </div >
    );
};

export default Navigation;