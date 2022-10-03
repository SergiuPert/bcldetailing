import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const About = () => (
    <div className="AboutContentDiv">
        <p>detailing - wrapping - leather restoration</p>
        <h1>BCL Detailing Garage</h1>
        <p>
            Atelierul BCL Detailing a fost infiintat in toamna anului 2020 si
            ofera servicii profesionale de detailing si cosmetica auto. Inca din
            stadiul incipient al proiectului nostru am reusit sa indeplinim
            cerintele clientilor si sa ne ridicam la standardele acestora,
            urmand mai apoi, ca portofoliul de clienti sa fie intr-o continua
            expansiune. Portofoliul nostru cu masinile poate fi vizionat
            accesand codul QR de mai sus.
        </p>
        <h1>Viziunea noastra</h1>
        <p>
            Sloganul care ne reprezinta si dupa care ne ghidam{" "}
            <span className={"quote"}>"Din pasiune pentru masini"</span>, expune
            punctul de pornire si motivatia dezvoltarii activitatii noastre.
            Viziunea noastra este de a deveni un jucator relevant pe piata de
            detailing auto.
        </p>
        <p>
            Strategia noastra se bazeaza pe o crestere organica si pe
            principiile etice care ne definesc.
        </p>
        <p>
            <FaCheckCircle color="green" /> Atelier acreditat
        </p>
        <p>
            <FaCheckCircle color="green" /> Echipament &amp; produse
            profesionale
        </p>
        <p>
            <FaCheckCircle color="green" /> Servicii de calitate
        </p>
        <p>
            <FaCheckCircle color="green" /> Profesionalism
        </p>
        <div className="aboutButtonsDiv">
            <Link className="aboutLink" to="/galerie">
                Galerie
            </Link>
            <Link className="aboutLink" to="/contact">
                Contacteaza-ne
            </Link>
        </div>
    </div>
);

export default About;
