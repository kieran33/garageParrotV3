import React from 'react';
import ford from "../image/voiture_ford_1.jpg"
import honda from "../image/voiture_honda_2.jpg"
import audi from "../image/voiture_audi_1.png"
import renault from "../image/voiture_renault_1.jpg"
import peugeot from "../image/voiture_peugeot_1.jpg"
import { useEffect } from 'react';

const DataVoitures = () => {

    const listeVoitures = [
        { id: 1, brand: 'ford', km: 214000, price: 5000, yearsCirculation: 2005, image: ford },
        { id: 2, brand: 'honda', km: 139000, price: 7000, yearsCirculation: 2002, image: honda },
        { id: 3, brand: 'audi', km: 56000, price: 9000, yearsCirculation: 2021, image: audi },
        { id: 4, brand: 'renault', km: 189000, price: 4500, yearsCirculation: 2011, image: renault },
        { id: 5, brand: 'peugot', km: 23000, price: 12000, yearsCirculation: 1998, image: peugeot }
    ];

    useEffect(() => {
        localStorage.setItem('liste de voitures', JSON.stringify(listeVoitures));
    }, [])

    return (
        <>
        </>
    );
};

export default DataVoitures;