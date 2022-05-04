// Add options to database

const database = {
    paintColors: [
        {
            id: 1,
            color: "Silver",
            price: 400
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 450
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 550
        },
        {
            id: 4,
            color: "Spring Green",
            price: 300
        }
    ],
    interiors: [
        {
            id: 1,
            interior: "Beige Fabric",
            price: 800
        },
        {
            id: 2,
            interior: "Charcoal Fabric",
            price: 900
        },
        {
            id: 3,
            interior: "White Leather",
            price: 1600
        },
        {
            id: 4,
            interior: "Black Leather",
            price: 2000
        }
    ],
    technologies: [
        {
            id: 1,
            package: "Basic Package (basic sound system)",
            price: 1800
        },
        {
            id: 2,
            package: "Navigation Package (includes integrated navigation controls)",
            price: 2100
        },
        {
            id: 3,
            package: "Visibility Package (includes side and reat cameras)",
            price: 2300
        },
        {
            id: 4,
            package: "Ultra Package (includes navigation and visibility packages)",
            price: 3000
        }
    ],
    wheels: [
        {
            id: 1,
            wheel: "17-inch Pair Radial",
            price: 1700
        },
        {
            id: 2,
            wheel: "17-inch Pair Radial Black",
            price: 1800
        },
        {
            id: 3,
            wheel: "18-inch Pair Spoke Silver",
            price: 2800
        },
        {
            id: 4,
            wheel: "18-inch Pair Spoke Black",
            price: 3000
        }
    ],
    customOrders: [
        {
            id: 1,
            colorId: 3,
            interiorId: 2,
            techId: 3,
            wheelId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

// create getter functions to export options to other components 

export const getColors = () => {
    return database.paintColors.map((color) => ({...color}))
}
  
export const getInteriors = () => {
    return database.interiors.map((interior) => ({...interior}))
}
  
export const getTechnologies = () => {
    return database.technologies.map((tech) => ({...tech}))
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

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    //Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to the custom orders state
    database.customOrders.push(newOrder)

    //Reset the temporary state for the user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}