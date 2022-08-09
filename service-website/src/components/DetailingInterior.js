import React from 'react';
import ServiceInfo from "./ServiceInfo";
import ServiceTitle from "./ServiceTitle";

const DetailingInterior = () => {
    const title = "Detailing Interior Auto"
    const description = "Serviciul de detailing complet al interiorului auto este recomandat a se realiza de 2 ori pe an, pentru a asigura o igienizare profesionala si de lungă durata. Procesul implica aplicarea unui tratament de intretinere premium pentru curatarea profunda a porilor din plastic și cauciuc, care, totodata, impiedica deteriorarea acestora. Igienizarea profesionala presupune utilizarea aparatului de curatat cu aburi si a aspiratorului cu injectie-extractie."
    const beforeList = "Serviciul complet de detailing interior conține:"
    const list = ["Colectarea lucrurilor din masina intr-un sac",
        "Suflare cu aer comprimat si aspirare interioara",
        "Curatare si dezinfectare tapiterie textila/piele/Alcantara",
        "Hidratare tapiterie piele",
        "Curatare si dezinfectare mochete si covorase",
        "Curatare si dezinfectare fete de usi, stalpi si elemente plastic",
        "Aplicare tratament de intretinere pentru elementele de plastic",
        "Curatare si dezinfectare plansa de bord si consola centrala",
        "Dezinfectare sistem climatizare si traseu aer",
        "Curatare si dezinfectare portabagaj si compartiment roata de rezerva",
        "Curatare pedale si sine scaune",
        "Curatare si hidratare chedere",
        "Curatare si degresare geamuri",
        "Odorizare interior"
]
    const packs = [
        {
            packageName: "Servicii la cerere si platite suplimentar:",
            packageBullets: ["Linia 1", "Linia 2", "Linia 3", "Linia 4", "Linia 5"],
            packagePrices: [
                {
                    carType: "Dezechipare si montare scaune + bancheta ",
                    price: 150
                },
                {
                    carType: "Aplicare protectie ceramic piele",
                    price: 300
                }
            ],
            services: [
                {
                    service: "Autovehicul clasa mica si medie",
                    price: 650
                },
                {
                    service: "Autovehicul clasa mare si SUV",
                    price: 800
                }
            ],
        }
    ]
    const duration = "2-3 zile"
    const pack = {} //small pack here

    return (
        <div className="App">
            <ServiceInfo title={title} duration={duration} description={description} beforeList={beforeList} list={list} packs={packs}/>
        </div>
    );
};

export default DetailingInterior;