import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Avis from '../components/Avis';
import Services from '../components/Services';

const Accueil = () => {
    return (
        <div>
            <Navigation />
            <Services />
            <div className="avisRating">
                <Avis />
            </div>
            <Footer />
        </div>
    );
};

export default Accueil;