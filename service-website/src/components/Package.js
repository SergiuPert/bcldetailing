import React from 'react';

const Package = (props) => {
    return (
        <div className="Pack">
            <h1 className="PackageName">{props.pack.packageName}</h1>
            {props.pack.packageBullets.map(bullet =>
            <p> - {bullet}</p>
            )}
            {props.pack.packagePrices.map(price =>
            <p>{price.carType} - {price.price} lei</p>
            )}
        </div>
    );
};

export default Package;