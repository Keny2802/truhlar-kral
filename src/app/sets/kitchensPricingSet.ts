import type {
    servicePricing
} from "../types/servicePricing";

const kitchensPricingSet:servicePricing[] = [
    {
        serviceIcon: "🍽️",
        service: "Malá kuchyňská linka",
        serviceDescription: "Ideální pro byty a menší prostory. Jednoduché rozvržení, kvalitní materiály, moderní design.",
        servicePrice: "od 45 000 Kč"
    },
    {
        serviceIcon: "🍽️",
        service: "Střední kuchyň",
        serviceDescription: "Praktické řešení pro rodinné domy. Včetně horních i spodních skříněk, pracovní desky a montáže.",
        servicePrice: "od 75 000 Kč"
    },
    {
        serviceIcon: "🍽️",
        service: "Velká rohová / tvaru U",
        serviceDescription: "Maximální využití prostoru, dostatek úložného místa, možnost integrovaných spotřebičů.",
        servicePrice: "od 110 000 Kč"
    },
    {
        serviceIcon: "🍽️",
        service: "Luxusní kuchyně na míru",
        serviceDescription: "Individuální návrh, prémiové materiály (masiv, kámen, designové kování), kompletní servis.",
        servicePrice: "od 150 000 Kč"
    }
];

export default kitchensPricingSet;