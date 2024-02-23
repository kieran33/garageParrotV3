import React from 'react';

const Services = () => {

    const updateListeServices = JSON.parse(localStorage.getItem('liste de services'));
    console.log('page service', updateListeServices);

    return (
        <div>
            <h1 className="titreServices">Nos services</h1>
            {updateListeServices.map((service, index) => (
                <div key={index}>
                    {index % 2 == 0 ?
                        <div className="services" index={index}>
                            <div className="texteService">
                                <h3 className="nomService">{service.name}</h3>
                                <p className="paragrapheService">{service.content}</p>
                            </div>
                            <img className="imageService" src={service.image} />
                        </div>
                        :
                        <div className="services" index={index}>
                            <img className="imageService" src={service.image} />
                            <div className="texteService">
                                <h3 className="nomService">{service.name}</h3>
                                <p className="paragrapheService">{service.content}</p>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
};

export default Services;