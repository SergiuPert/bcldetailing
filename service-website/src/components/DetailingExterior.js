import React from 'react';
import ServiceInfo from "./ServiceInfo";

const DetailingExterior = () => {
    const title = "Detailing Exterior Auto"
    const description = "Serviciul complet de detailing exterior contine: spalare exterioara detaliata, decontaminare cu argila, suflare cu aer comprimat si uscare, izolarea masinii cu banda de protectie, corectie lac in 1-3 pasi/polisarea lacului, aplicare protectie vopsea, curatarea jantelor si a anvelopelor, curatarea si degresarea geamurilor."
    const beforeList = "Serviciile de detailing exterior disponibile sunt urmatoarele:"
    const list = [ 	"Decontaminare vopsea cu argila",
                    "Curatare si degresare geamuri",
                    "Aplicare tratament hidrofob pentru geamuri",
                    "Curatare jante",
                    "Aplicare protectie ceramica jante",
                    "Hidratare anvelope",
                    "Polish lac",
                    "Corectie lac",
                    "Aplicare protectie vopsea (sealant/ceara)",
                    "Polish faruri si aplicare folie de protectie"
                    ]

    const packs = [
        {
            packageName: "",
            packageBullets: ["Linia 1", "Linia 2", "Linia 3", "Linia 4", "Linia 5"],
            packagePrices: [],
            services: [
                {
                    service: "Polish one-step",
                    price: 800
                },
                {
                    service: "Corectie lac (variaza in functie de gradul de corectie si dimensiunea masinii)",
                    price: 1300
                },
                {
                    service: "Aplicare protectie ceramic jante",
                    price: 400
                },
                {
                    service: "Polish faruri si aplicare folie de protectie ",
                    price: 450
                }
            ]
        }
    ]
    const duration = "variaza in functie de complexitatea serviciului"

    return (
        <div className="App">
            <ServiceInfo title={title} duration={duration} description={description} beforeList={beforeList} list={list} packs={packs}/>
        </div>
    );
};

export default DetailingExterior;