import React from 'react';
import ServiceInfo from "./ServiceInfo";
import ServiceTitle from "./ServiceTitle";

const DetailingInterior = () => {
    const title = "Detailing Interior"
    const description = "Protectie și un aspect intinerit pentru interiorul masinii tale"
    const beforeList = "Uite ce poate face în plus pentru tine un serviciu de detailing interior profesionist fata de o curatare obisnuita:"
    const list = ["scapi de petele și murdaria de pe tapiterie, fie ea din piele sau din material textil",
        "tapiteria scaunelor și banchetei din piele vor fi protejate în cazul în care tu sau unul dintre pasageri varsati ceva pe ea, datorita protectiei ceramice",
        "iti protejeaza tapiteria împotriva decolorării și deteriorării cauzate de razele uv sau alti factori externi (cum ar fi purtatul blugilor)",
        "scapi de mizeria din masina, chiar și din locurile cele mai greu accesibile"]
    const packs = [
        {
            packageName: "Detailing interior Bronze",
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
            packageName: "Detailing interior Silver",
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
            packageName: "Detailing interior Gold",
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
            packageName: "Detailing interior Platinum",
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

export default DetailingInterior;