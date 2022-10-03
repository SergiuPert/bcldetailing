import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Galery from "./components/Galery";
import Services from "./components/Services";
import DetailingInterior from "./components/DetailingInterior";
import Contact from "./components/Contact";
import React from "react";
import DetailingExterior from "./components/DetailingExterior";
import DetailingMotor from "./components/DetailingMotor";
import VopsireEtriere from "./components/VopsireEtriere";

const App = () => (
    <div>
        <BrowserRouter>
            <div className="All">
                <NavBar />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} exact />
                        <Route path="/desprenoi" element={<About />} />
                        <Route path="/galerie" element={<Galery />} />
                        <Route path="/servicii" element={<Services />} />
                        <Route
                            path="/detailinginterior"
                            element={<DetailingInterior />}
                        />
                        <Route
                            path="/detailingexterior"
                            element={<DetailingExterior />}
                        />
                        <Route
                            path="/detailingmotor"
                            element={<DetailingMotor />}
                        />
                        <Route
                            path="/vopsireetriere"
                            element={<VopsireEtriere />}
                        />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>
);

export default App;
