import type {
    servicePricing
} from "../types/servicePricing";

const roofPricingSet:servicePricing[] = [
    {
        serviceIcon: "🏠",
        service: "Pokládka nové střešní krytiny",
        serviceDescription: "Kompletní montáž nové krytiny včetně latí a doplňků.",
        servicePrice: "od 350 Kč/m²"
    },
    {
        serviceIcon: "🏠",
        service: "Rekonstrukce střechy",
        serviceDescription: "Demontáž staré krytiny, oprava nebo výměna částí krovu, nová krytina.",
        servicePrice: "od 600 Kč/m²"
    },
    {
        serviceIcon: "🏠",
        service: "Oprava střechy",
        serviceDescription: "Lokální opravy, výměna poškozených tašek, plechů nebo izolace.",
        servicePrice: "od 1 500 Kč"
    },
    {
        serviceIcon: "🏠",
        service: "Montáž střešních oken",
        serviceDescription: "Osazení střešního okna včetně lemování a začištění.",
        servicePrice: "od 6 500 Kč"
    },
    {
        serviceIcon: "🏠",
        service: "Oplechování a okapový systém",
        serviceDescription: "Montáž oplechování, žlabů, svodů a dalších klempířských prvků.",
        servicePrice: "od 3 000 Kč"
    },
    {
        serviceIcon: "🏠",
        service: "Zateplení střechy / podkroví",
        serviceDescription: "Instalace izolace a parozábrany pro lepší energetickou úsporu.",
        servicePrice: "od 500 Kč/m²"
    }
];

export default roofPricingSet;