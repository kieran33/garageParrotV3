import React from 'react';
import { useState } from 'react';

const BoutonFermeOuvert = () => {

    const [action, setAction] = useState('ouvert');

    const fermerGarage = () => {
        setAction('fermer');
        console.log(action);
        localStorage.setItem('ouvert ou fermer', action);
    }

    const ouvrirGarage = () => {
        setAction('ouvert');
        console.log(action);
        localStorage.setItem('ouvert ou fermer', action);
    }

    return (
        <div>
            {action === 'ouvert' ?
                <button className="ouvertOuFermer" onClick={fermerGarage}>Garage fermer</button>
                :
                <button className="ouvertOuFermer" onClick={ouvrirGarage}>Garage ouvert</button>
            }
        </div >
    );
};

export default BoutonFermeOuvert;