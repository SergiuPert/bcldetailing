import React from "react";
import ServiceTitleSmall from "./ServiceTitleSmall";
import Package from "./Package";

const ServiceInfo = ({
    title,
    description,
    beforeList,
    list = [],
    packs = [],
    duration,
}) => {
    return (
        <div className="serviceInfo">
            <div className="serviceDiv">
                <ServiceTitleSmall title={title} />
                <div className="justifyText serviceText">
                    <p>{description}</p>
                    <h4>{beforeList}</h4>
                    <ul>
                        {list.length > 0 &&
                            list.map((sentence, key) => (
                                <li key={key}>{sentence}</li>
                            ))}
                    </ul>
                </div>
                <div className="ServicePacksDiv">
                    {packs.length > 0 &&
                        packs.map((pack, key) => (
                            <Package pack={pack} key={key} />
                        ))}
                </div>
                <h3>Timp de lucru: {duration}</h3>
            </div>
        </div>
    );
};

export default ServiceInfo;
