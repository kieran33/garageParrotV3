import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import "./App.css";
import DetailsVoiture from './pages/DetailsVoiture';
import SeConnecter from './pages/SeConnecter';
import Occasions from './pages/Occasions';
import DashboardAdmin from './pages/DashboardAdmin';
import Fermeture from './pages/Fermeture';
import DashboardEmploye from './pages/DashboardEmploye';
import DataAvis from './components/DataAvis';
import DataServices from './components/DataServices';
import DataVoitures from './components/DataVoitures';

const App = () => {

  const emailUser = localStorage.getItem('email user');
  const ouvertOuFermer = localStorage.getItem('ouvert ou fermer');
  const passwordUser = localStorage.getItem('password user');

  const etatConnexion = localStorage.getItem('etat connexion');
  const admin = localStorage.getItem('compte admin');

  return (
    <>
      <BrowserRouter>
        <Routes>
          {(admin == null || etatConnexion === null) && ouvertOuFermer === 'fermer' ?
            < Route path="/" element={<Fermeture />} />
            :
            <Route path="/" element={<Accueil />} />
          }
          <Route path="voiture/:id" element={<DetailsVoiture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="voiture/:id/contact" element={<Contact />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/connexion" element={<SeConnecter />} />
          <Route path="/dashboard-admin" element={<DashboardAdmin />} />
          <Route path="/dashboard-employe" element={<DashboardEmploye />} />
        </Routes>
      </BrowserRouter>
      <DataAvis />
      <DataServices />
      <DataVoitures />
    </>
  );
};

export default App;