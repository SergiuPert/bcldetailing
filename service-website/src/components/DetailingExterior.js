import React from 'react';
import ServiceInfo from "./ServiceInfo";

const DetailingExterior = () => {
    const title = "Detailing Exterior"
    const description = "Scapa de micile zgarieturi ale masinii, de galbenul farurilor și reda luciul vopselei"
    const beforeList = "Detailing-ul exterior este metoda profesionista de curatare a exteriorului masinii care, impreuna cu protectia ceramica, te ajuta sa:"
    const list = ["scapi de imperfectiunile de pe caroserie",
        "scapi de oxidarea de la suprafata lacului care reduc luciul vopselei si aspectul neplacut",
        "iti va fi mai usor sa o speli și datorita protectiei ceramice, care chiar te va scuti de cateva drumuri la spalatorie",
        "masina va fi protejata impotriva factorilor de mediu și externi (ploaie, soare puternic, raze uv, solutiile antiderapante folosite pentru deszapezire s.a.)"]
    const packs = [
        {
            packageName: "Detailing exterior Bronze",
            packageBullets: ["Linia 1", "Linia 2", "Linia 3", "Linia 4", "Linia 5"],
            packagePrices: [
                {
                    carType: "Masina mica",
                    price: 500
                },
                {
                    carType: "Sedan / Limuzina / Break",
                    price: 700
                },
                {
                    carType: "SUV",
                    price: 800
                }
            ]        },
        {
            packageName: "Detailing exterior Silver",
            packageBullets: ["Linia 1", "Linia 2", "Linia 3", "Linia 4", "Linia 5"],
            packagePrices: [
                {
                    carType: "Masina mica",
                    price: 1000
                },
                {
                    carType: "Sedan / Limuzina / Break",
                    price: 1300
                },
                {
                    carType: "SUV",
                    price: 1500
                }
            ]
        },
        {
            packageName: "Detailing exterior Gold",
            packageBullets: ["Linia 1", "Linia 2", "Linia 3", "Linia 4", "Linia 5"],
            packagePrices: [
                {
                    carType: "Masina mica",
                    price: 1300
                },
                {
                    carType: "Sedan / Limuzina / Break",
                    price: 1500
                },
                {
                    carType: "SUV",
                    price: 1600
                }
            ]
        },
        {
            packageName: "Detailing exterior Platinum",
            packageBullets: ["Linia 1", "Linia 2", "Linia 3", "Linia 4", "Linia 5"],
            packagePrices: [
                {
                    carType: "Masina mica",
                    price: 1500
                },
                {
                    carType: "Sedan / Limuzina / Break",
                    price: 1700
                },
                {
                    carType: "SUV",
                    price: 1800
                }
            ]
        }
    ]


    return (
        <div className="App">
            <ServiceInfo title={title} description={description} beforeList={beforeList} list={list} packs={packs}/>
        </div>
    );
};

export default DetailingExterior;