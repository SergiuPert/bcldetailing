import React from 'react';
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import ServiceTitle from "./ServiceTitle";
import Map from "./GMap";
import GMap from "./GMap";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (Status) => {
    return <h1>{Status}</h1>;
};

const Contact = () => {
    return (
        <div className="Contact">
            <div className="ContactTitle">
                <h1>Contact</h1>
            </div>
            <div className="ContactDiv">
                <div className="ContactDetails">
                    <h4 className="ContactHeading">E-MAIL</h4>
                    <p className="ContactText">aaaaaaa@aaa.com</p>
                    <h4 className="ContactHeading">TELEFON</h4>
                    <p className="ContactText">0722222222</p>
                    <h4 className="ContactHeading">ADRESĂ</h4>
                    <p className="ContactText">Str. Mihai Viteazul nr. 30</p>
                </div>
                <GMap/>
            </div>
        </div>
    );
};

export default Contact;