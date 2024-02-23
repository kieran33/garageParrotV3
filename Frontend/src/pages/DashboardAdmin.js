import React from 'react';
import Navigation from '../components/Navigation';
import BlocDashboardAdmin from '../components/BlocDashboardAdmin';

const DashboardAdmin = () => {

    return (
        <div>
            <Navigation />
            <h1>Espace administration admin</h1>
            <BlocDashboardAdmin />
        </div>
    );
};

export default DashboardAdmin;