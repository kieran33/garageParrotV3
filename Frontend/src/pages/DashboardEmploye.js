import React from 'react';
import Navigation from '../components/Navigation';
import BoutonAjoutVoitures from '../components/BoutonAjoutVoitures';
import BoutonSupprimerVoitures from '../components/BoutonSupprimerVoitures';
import ApprouverOuSupprimerAvis from '../components/ApprouverOuSupprimerAvis';

const DashboardEmploye = () => {

    return (
        <div>
            <Navigation />
            <h1>Espace administration employé</h1>
            <div className="boutonDashboard">
                <BoutonAjoutVoitures />
                <BoutonSupprimerVoitures />
            </div>
            <ApprouverOuSupprimerAvis />
        </div>
    );
};

export default DashboardEmploye;