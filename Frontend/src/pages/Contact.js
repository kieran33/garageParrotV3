import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <form id="formulaireContact">
                <legend>Une question ? Laissez-nous votre message</legend>
                <input type="text" name="nom" className="nomFormulaireContact" id="nom" placeholder="Votre nom" required></input>
                <label htmlFor="nom"></label>

                <input type="text" name="prenom" className="prenomFormulaireContact" id="prenom" placeholder="Votre prenom" required></input>
                <label htmlFor="prenom"></label>

                <input type="email" name="email" className="emailFormulaireContact" id="email" placeholder="Votre email" required></input>
                <label htmlFor="email"></label>

                <input type="tel" name="phone" className="phoneFormulaireContact" id="phone" placeholder="Votre numéro de téléphone" required></input>
                <label htmlFor="phone"></label>

                <textarea name="question" className="questionFormulaireContact" id="question" cols="75" rows="10" placeholder="Votre message"></textarea>

                <button type="submit" value="Envoyer" className="boutonContactEnvoyer">Envoyer</button>
            </form>
            {/*<div className="conteneurNumeroTel">
                <p>Où contactez-nous par téléphone au : 06 06 06 06 06</p>
    </div>*/}
            <Footer />
        </div>
    );
};

export default Contact;