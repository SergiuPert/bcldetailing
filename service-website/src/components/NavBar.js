import React from 'react';
import {Link, Route} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logoDiv">
                <Link className="logo" to="/" >BCL Detailing Garage</Link>
            </div>
            <div className="navBarButtonsDiv">
                <Link className="navBarButton" to="/" >Acasa</Link>
                <Link className="navBarButton" to="/desprenoi" >Despre Noi</Link>
                <Link className="navBarButton" to="/galerie" >Galerie</Link>
                <div className="navBarButton dropdownButton">Servicii</div>
                    <div className="dropdown-content">
                        <Link className="navBarButton" to="/detailinginterior" > - Detailing Interior</Link>
                        <Link className="navBarButton" to="/detailingexterior" > - Detailing Exterior</Link>
                    </div>
                <Link className="navBarButton" to="/contact" >Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;

//
// <Route path="/" element={<App />} />
// <Route path="/desprenoi" element={<About />} />
// <Route path="/galerie" element={<Galery />} />
// <Route path="/servicii" element={<Services />} />
// <Route path="/contact" element={<Contact />} />