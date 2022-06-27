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
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "BGN",
        countries: "Bulgaria",
        countriesID: ["BG"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "BRL",
        countries: "Brazil",
        countriesID: ["BR"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "CAD",
        countries: "Canada",
        countriesID: ["CA"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
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
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "CNY",
        countries: "China",
        countriesID: ["CN"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "CZK",
        countries: "Czech Republic",
        countriesID: ["CZ"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "DKK",
        countries: "Denmark",
        countriesID: ["DK"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
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
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "GBP",
        countries: "United Kingdom",
        countriesID: ["GB"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "HKD",
        countries: "Hong Kong",
        countriesID: ["HK"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "HRK",
        countries: "Hong Kong",
        countriesID: ["HK"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "HUF",
        countries: "Hungary",
        countriesID: ["HU"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "IDR",
        countries: "Indonesia",
        countriesID: ["ID"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
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
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "INR",
        countries: "India",
        countriesID: ["IN"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "ISK",
        countries: "Iceland",
        countriesID: ["IS"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "JPY",
        countries: "Japan",
        countriesID: ["JP"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "KRW",
        countries: "Korea, South",
        countriesID: ["KR"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "MXN",
        countries: "Mexico",
        countriesID: ["MX"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "MYR",
        countries: "Malaysia",
        countriesID: ["MY"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "NOK",
        countries: "Norway",
        countriesID: ["NO"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "NZD",
        countries: "New Zealand",
        countriesID: ["NZ"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "PHP",
        countries: "Philippines",
        countriesID: ["PH"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "RON",
        countries: "Romania",
        countriesID: ["RO"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "SEK",
        countries: "Sweden",
        countriesID: ["SE"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "SGD",
        countries: "Singapore",
        countriesID: ["SG"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "THB",
        countries: "Thailand",
        countriesID: ["TH"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "TRY",
        countries: "Turkey",
        countriesID: ["TR"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
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
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "ZAR",
        countries: "South Africa",
        countriesID: ["ZA"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
    {
        name: "PLN",
        countries: "Poland",
        countriesID: ["PL"],
        todayRate: 0,
        yesterdayRate: 0,
        differencePercentage: 0,
        color: "grey"
    },
]

function diffPercentage (compare, base) {
    return ((compare - base) / ((compare + base)/2)) * 100;
}

async function getTodayData () {
    await fetch("https://api.frankfurter.app/latest?from=PLN")
    .then(response => response.json())
    .then(data => {
        var i = 0;
        // This makes the counter the property of the object
        // In this case it makes it "AUD", "EUR", "USD" etc
        for(var currency in data.rates) {

            console.log(currency);
            console.log(currencies[i].name);


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
                currencies[i].differencePercentage = diffPercentage(currencies[i].todayRate, currencies[i].yesterdayRate);

                // Change Country color based on Percentage
                if (currencies[i].differencePercentage > 0)
                    currencies[i].color = "green";
                else if (currencies[i].differencePercentage < 0)
                    currencies[i].color = "red";
                else
                    currencies[i].color = "grey";
            }

            i++;
        }

        console.log(currencies);
    })
}
