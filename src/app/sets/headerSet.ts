const headerSet = [
    {
        labelLink: "Domů",
        // href: "home",
        href: "/",
        page: "domu",
        type: "page"
    },
    {
        labelLink: "Služby",
        href: "/sluzby",
        // page: "sluzby",
        type: "drop down",
        dropDownList: [
            {
                label: "Kuchyně na míru",
                href: "/kuchyne-na-miru"
            },
            {
                label: "Nábytek na míru",
                href: "/nabytek-na-miru"
            },
            {
                label: "Koupelny na míru",
                href: "/koupelny-na-miru"
            },
            {
                label: "Střešní práce",
                href: "/stresni-prace"
            }
        ]
    },
    {
        labelLink: "O nás",
        href: "/o-nas",
        page: "o-nas",
        type: "page"
    },
    {
        labelLink: "Kontakt",
        href: "/kontakt",
        page: "kontakt",
        type: "page"
    },
];

export default headerSet;