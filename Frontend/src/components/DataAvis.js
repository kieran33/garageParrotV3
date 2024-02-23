import React, { useEffect } from 'react';

const DataAvis = () => {

    const listeAvis = [
        { name: "Martin", note: 5, message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
        { name: "Jeanne", note: 3, message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
        { name: "Claude", note: 4, message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
        { name: "Lisa", note: 5, message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" }
    ]

    const listeAvisNonApprouve = [];

    useEffect(() => {
        localStorage.setItem('liste des avis', JSON.stringify(listeAvis));

        localStorage.setItem('liste des avis non approuvés', JSON.stringify(listeAvisNonApprouve));
    }, []);

    return (
        <div>
        </div>
    );
};

export default DataAvis;