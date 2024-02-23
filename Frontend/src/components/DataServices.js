import React from 'react';
import service1 from '../image/garage-service-1.jpg'
import service2 from '../image/garage-service-2.jpg'
import service3 from '../image/garage-service-3.jpg'
import { useEffect } from 'react';

const DataServices = () => {

    const listeServices = [
        { name: "service1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue porta, commodo purus in", image: service1 },
        { name: "service2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue porta, commodo purus in", image: service2 },
        { name: "service3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu augue porta, commodo purus in", image: service3 }
    ]

    useEffect(() => {
        localStorage.setItem('liste de services', JSON.stringify(listeServices));
    }, []);

    return (
        <div>

        </div>
    );
};

export default DataServices;