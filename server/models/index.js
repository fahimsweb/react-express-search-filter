// Demo data structure as provided

let schema = {
    "cars": [{
            "id": 1,
            "model": "One",
            "brandId": 1
        },
        {
            "id": 2,
            "model": "Two",
            "brandId": 2
        },
        {
            "id": 1,
            "model": "Two",
            "brandId": 2
        }
    ],
    "brands": [{
            "id": 1,
            "name": "Three",
            "companyId": 1
        },
        {
            "id": 2,
            "name": "Four",
            "companyId": 2
        }
    ],
    "companies": [{
            "id": 1,
            "name": "One"
        },
        {
            "id": 2,
            "name": "Two"
        }
    ]
}

module.exports = schema;