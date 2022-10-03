import React from "react";

const Package = ({ pack }) => {
    return (
        <div className="Pack">
            <h1 className="PackageName">Preturi:</h1>
            {pack.services.map((service, key) => (
                <p key={key}>
                    {service.service} - {service.price} lei
                </p>
            ))}
            <h1 className="PackageName">{pack.packageName}</h1>
            {pack.packagePrices.map((price, key) => (
                <p key={key}>
                    {price.carType} - {price.price} lei
                </p>
            ))}
        </div>
    );
};

export default Package;
