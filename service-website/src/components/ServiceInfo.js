import React from 'react';
import ServiceTitleSmall from "./ServiceTitleSmall";
import ServiceTitle from "./ServiceTitle";
import Package from "./Package";

const ServiceInfo = (props) => {
    return (
        <div className="serviceInfo">
            <ServiceTitle title={props.title} />
            <div className="serviceDiv">
                <ServiceTitleSmall title={props.title} />
                <div className="justifyText serviceText">
                    <h4>{props.description}</h4>
                    <p>{props.beforeList}</p>
                    <ul>
                        {props.list.map(sentence =>
                            <li>{sentence}</li>
                        )}
                    </ul>
                </div>
                <h4 className="justifyText serviceText">Pachete:</h4>
                <div className="ServicePacksDiv">
                    {props.packs.map(pack =>
                        <Package pack={pack} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;