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
    customOrders: [
        {
            // id: 1,
            // colorId: 3,
            // interiorId: 2,
            // technologyId: 2,
            // wheelId: 1,
            // timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}



export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    if (!database.customOrders.id) {
        newOrder.id = 1
    } else {
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1
    }

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
