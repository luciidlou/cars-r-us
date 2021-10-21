const database = {
    colors:[
        {
            id: 1,
            type: "Silver",
            price: 2500.89
        },
        {
            id: 2,
            type: "Midnight Blue",
            price: 3087.22
        },
        {
            id: 3,
            type: "Firebrick Red",
            price: 2943.90
        },
        {
            id: 4,
            type: "Spring Green",
            price: 3567.43
        }
    ],
    interiors:[
        {
            id: 1,
            type: "Beige Fabric",
            price: 2287.12
        },
        {
            id: 2,
            type: "Charcoal Fabric",
            price: 2532.23
        }, 
        {
            id: 3,
            type: "White Leather",
            price: 6312.47
        },
        {
            id: 4,
            type: "Black Leather",
            price: 7021.31
        }
    ],
    technologies:[
        {
            id: 1,
            package: "Basic",
            price: 982.25
        },
        {
            id: 2,
            package: "Navigation",
            price: 1622.68
        },
        {
            id: 3,
            package: "Visibility",
            price: 1543.78
        },
        {
            id: 4,
            package: "Ultra",
            price: 3621.98
        }
    ],
    wheels:[
        {
            id: 1,
            type: "17-inch Pair Radial",
            price: 499.75
        },
        {
            id: 2,
            type: "17-inch Pair Radial Black",
            price: 589.46
        },
        {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 772.66
        },
        {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 802.91
        }
    ],
    cars:[
        {
            id: 1,
            type: "Car",
            price: 1
        },
        {
            id: 2,
            type: "SUV",
            price: 1.5
        },
        {
            id: 3,
            type: "Truck",
            price: 2.25
        }
    ],
    customOrders: [],
    orderBuilder: {}
}


export const getDatabase = () => {
    const copyOfDatabase = Object.assign({}, database)
    return copyOfDatabase
}

