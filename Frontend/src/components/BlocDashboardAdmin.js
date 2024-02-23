import React from 'react';
import { useState } from 'react';
import AjoutServices from '../components/AjoutServices';
import SupprimerServices from './SupprimerServices';
import CreerEmploye from './CreerEmploye';
import SupprimerEmploye from './SupprimerEmploye';
import BoutonFermeOuvert from './BoutonFermeOuvert';

const BlocDashboardAdmin = () => {

    const [isOpenAjout, setIsOpenAjout] = useState(false);
    const [isOpenSupprimer, setIsOpenSupprimer] = useState(false);
    const [isOpenCreer, setIsOpenCreer] = useState(false);
    const [isOpenSupprimerEmploye, setIsOpenSupprimerEmploye] = useState(false);

    const isOpenAjoutServices = () => {
        setIsOpenAjout(true);
    }

    const isCloseAjoutServices = () => {
        setIsOpenAjout(false);
    }

    const isOpenSupprimerService = () => {
        setIsOpenSupprimer(true);
    }

    const isCloseSupprimerService = () => {
        setIsOpenSupprimer(false);
    }

    const isOpenCreerEmploye = () => {
        setIsOpenCreer(true);
    }

    const isCloseCreerEmploye = () => {
        setIsOpenCreer(false);
    }

    const isOpenSupprimerCompteEmploye = () => {
        setIsOpenSupprimerEmploye(true);
    }

    const isCloseSupprimerCompteEmploye = () => {
        setIsOpenSupprimerEmploye(false);
    }

    return (
        <div>
            <div className="boutonDashboard">
                {isOpenAjout === false ?
                    <button className="tailleBoutonDashboard" onClick={isOpenAjoutServices}>Ajouter service</button>
                    :
                    <button className="tailleBoutonDashboard" onClick={isCloseAjoutServices}>Fermer</button>
                }

                {isOpenSupprimer === false ?
                    <button className="tailleBoutonDashboard" onClick={isOpenSupprimerService}>Supprimer service</button>
                    :
                    <button className="tailleBoutonDashboard" onClick={isCloseSupprimerService}>Fermer</button>
                }

                {isOpenCreer === false ?
                    <button className="tailleBoutonDashboard" onClick={isOpenCreerEmploye}>Créer compte employé</button>
                    :
                    <button className="tailleBoutonDashboard" onClick={isCloseCreerEmploye}>Fermer</button>
                }

                {isOpenSupprimerEmploye === false ?
                    <button className="tailleBoutonDashboard" onClick={isOpenSupprimerCompteEmploye}>Supprimer compte employé</button>
                    :
                    <button className="tailleBoutonDashboard" onClick={isCloseSupprimerCompteEmploye}>Fermer</button>
                }
                <BoutonFermeOuvert />
            </div>

            {isOpenAjout === false ?
                null
                :
                <AjoutServices />
            }

            {isOpenSupprimer === false ?
                null
                :
                <SupprimerServices />
            }

            {isOpenCreer === false ?
                null
                :
                <CreerEmploye />
            }

            {isOpenSupprimerEmploye === false ?
                null
                :
                <SupprimerEmploye />
            }
        </div>
    );
};

export default BlocDashboardAdmin;