const g2oz = 31.1034768;

// Supported currencies
var currencies = [
    {
        name: "AUD",
        countries: [
            "Australia",
            "Kiribati",
            "Nauru",
            "Tuvalu"
        ],
        countriesID: [
            "AU",
            "KI",
            "NR",
            "TV"
        ],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "BGN",
        countries: "Bulgaria",
        countriesID: ["BG"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "BRL",
        countries: "Brazil",
        countriesID: ["BR"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "CAD",
        countries: "Canada",
        countriesID: ["CA"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "CHF",
        countries: [
            "Liechtenstein",
            "Switzerland"
        ],
        countriesID: [
            "LI",
            "CH"
        ],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "CNY",
        countries: "China",
        countriesID: ["CN"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "CZK",
        countries: "Czech Republic",
        countriesID: ["CZ"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "DKK",
        countries: "Denmark",
        countriesID: ["DK"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "EUR",
        countries: [
            "Andorra",
            "Austria",
            "Belgium",
            "Cyprus",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Ireland",
            "Italy",
            "Kosovo",
            "Latvia",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "Monaco",
            "Montenegro",
            "Netherlands",
            "Portugal",
            "San Marino",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Vatican City",
        ],
        countriesID: [
            "AD",
            "AT",
            "BE",
            "CY",
            "EE",
            "FI",
            "FR",
            "DE",
            "GR",
            "IE",
            "IT",
            "XK",
            "LV",
            "LT",
            "LU",
            "MT",
            "MC",
            "ME",
            "NL",
            "AN",
            "PT",
            "SM",
            "SK",
            "SI",
            "ES",
            "VA"
        ],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "GBP",
        countries: "United Kingdom",
        countriesID: ["GB"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "HKD",
        countries: "Hong Kong",
        countriesID: ["HK"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "HRK",
        countries: "Hong Kong",
        countriesID: ["HK"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "HUF",
        countries: "Hungary",
        countriesID: ["HU"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "IDR",
        countries: "Indonesia",
        countriesID: ["ID"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "ILS",
        countries: [
            "Israel",
            "Palestine"
        ],
        countriesID: [
            "IL",
            "PS"
        ],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "INR",
        countries: "India",
        countriesID: ["IN"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "ISK",
        countries: "Iceland",
        countriesID: ["IS"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "JPY",
        countries: "Japan",
        countriesID: ["JP"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "KRW",
        countries: "Korea, South",
        countriesID: ["KR"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "MXN",
        countries: "Mexico",
        countriesID: ["MX"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "MYR",
        countries: "Malaysia",
        countriesID: ["MY"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "NOK",
        countries: "Norway",
        countriesID: ["NO"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "NZD",
        countries: "New Zealand",
        countriesID: ["NZ"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "PHP",
        countries: "Philippines",
        countriesID: ["PH"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "RON",
        countries: "Romania",
        countriesID: ["RO"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "SEK",
        countries: "Sweden",
        countriesID: ["SE"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "SGD",
        countries: "Singapore",
        countriesID: ["SG"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "THB",
        countries: "Thailand",
        countriesID: ["TH"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "TRY",
        countries: "Turkey",
        countriesID: ["TR"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "USD",
        countries: [
            "East Timor",
            "Ecuador",
            "El Salvador",
            "Marshall Islands",
            "Micronesia",
            "Palau",
            "United States",
            "Zimbabwe"
        ],
        countriesID: [
            "TL",
            "EC",
            "SV",
            "MH",
            "FM",
            "PW",
            "US",
            "UM",
            "ZW"
        ],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "ZAR",
        countries: "South Africa",
        countriesID: ["ZA"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
    {
        name: "PLN",
        countries: "Poland",
        countriesID: ["PL"],
        todayRate: 0,
        yesterdayRate: 0,
        changePercentage: 0,
        color: "blue"
    },
]

var areasWithSettings = [
    // {
    //     id: "AU",
    //     color: currencies[0].color
    // },
]

function diffPercentage (compare, base) {
    return ((compare - base) / ((compare + base)/2)) * 100;
}

async function getTodayGold() {
    // GOLD value in PLN
    await fetch("https://api.nbp.pl/api/cenyzlota/")
    .then(response => response.json())
    .then(data => {
        currencies[31].todayRate = data[0].cena;
    })
}

async function getYesterdayGold() {
    //GOLD value in PLN
    await fetch("https://api.nbp.pl/api/cenyzlota/2022-06-21")
    .then(response => response.json())
    .then(data => {
        currencies[31].yesterdayRate = data[0].cena;
    })
}

async function getTodayData () {
    // CURRENCIES value in PLN
    await fetch("https://api.frankfurter.app/latest?from=PLN")
    .then(response => response.json())
    .then(data => {
        var i = 0;
        // This makes the counter the property of the object
        // In this case it makes it "AUD", "EUR", "USD" etc

        console.log("Data Rates");
        console.log(data.rates);

        for(var currency in data.rates) {
            if(currency.localeCompare(currencies[i].name)){
                console.log(`API has changed the currencies that it supplies. Discrepancy is in ${currency}`);
                i--;
            } else {
                currencies[i].todayRate = data.rates[currency];
            }

            i++;
        }
    })
}

async function getYesterdayData () {
    // CURRENCIES value in PLN
    await fetch("https://api.frankfurter.app/2022-06-25?from=PLN")
    .then(response => response.json())
    .then(data => {
        var i = 0;
        // This makes the counter the property of the object
        // In this case it makes it "AUD", "EUR", "USD" etc
        for(var currency in data.rates) {
            if(currency.localeCompare(currencies[i].name)){
                `API has changed the currencies that it supplies. Discrepancy is in ${currency}`;
                i--;
            } else {
                currencies[i].yesterdayRate = data.rates[currency];

                // Calculate And Allocate Percentage Difference
                currencies[i].changePercentage = diffPercentage(currencies[i].todayRate, currencies[i].yesterdayRate);

                // Change Country color based on Percentage
                if (currencies[i].changePercentage > 0)
                    currencies[i].color = "green";
                else if (currencies[i].changePercentage < 0)
                    currencies[i].color = "red";
                else
                    currencies[i].color = "blue";
            }
            i++;
        }
    })
}

async function limitRate () {
    await getTodayData();
    await getYesterdayData();

    await getTodayGold();
    await getYesterdayGold();


    // currencies[31].changePercentage = diffPercentage(currencies[31].todayRate, currencies[31].yesterdayRate);

    // currencies[31].todayRate = currencies[31].todayRate * currencies[29].todayRate * g2oz;
    // currencies[31].yesterdayRate = currencies[31].todayRate * currencies[29].yesterdayRate * g2oz;

    currencies[31].changePercentage = diffPercentage(currencies[31].todayRate, currencies[31].yesterdayRate);


    for(var i = 0; i < 31; i++) {
        currencies[i].todayRate = currencies[31].todayRate * currencies[i].todayRate * g2oz;
        currencies[i].yesterdayRate = currencies[31].yesterdayRate * currencies[i].yesterdayRate * g2oz;

        for(var j = 0; j < currencies[i].countriesID.length; j++ ) {
            areasWithSettings.push({
                id: currencies[i].countriesID[j],
                color: currencies[i].color,
                "title": currencies[i].name + "<br>Today: " + currencies[i].todayRate + "<br>Yesterday: " + currencies[i].yesterdayRate
            })
        }
    }

    console.log(areasWithSettings);
    console.log(currencies);

    // Map API
    var map = AmCharts.makeChart("mapdiv",{
        type: "map",
        theme: "dark",
        projection: "mercator",
        panEventsEnabled : true,
        backgroundColor : "#535364",
        backgroundAlpha : 1,
        zoomControl: {
            zoomControlEnabled : true
        },
        dataProvider : {
            map : "worldHigh",
            getAreasFromMap : true,
            areas : areasWithSettings
        },
            areasSettings : {
                autoZoom : false,
                color : "#B4B4B7",
                colorSolid : "#84ADE9",
                selectedColor : "#84ADE9",
                outlineColor : "#666666",
                rollOverColor : "#9EC2F7",
                rollOverOutlineColor : "#000000"
            }
    });
}
