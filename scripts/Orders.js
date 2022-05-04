import { getColors, getInteriors, getOrders, getTechnologies, getWheels } from "./database.js"

/* 
create html string for order printout
*/

const buildOrder = (order) => {
    const paints = getColors()
    const interiors = getInteriors()
    const techs = getTechnologies()
    const wheels = getWheels()
    
    const chosenPaint = paints.find(paint => {
        return paint.id === order.colorId
    })
    
    const chosenInterior = interiors.find((interior) => {
        return interior.id === order.interiorId
    })
    
    const chosenTech = techs.find((tech) => {
        return tech.id === order.techId
    })
    
    const chosenWheel = wheels.find((wheel) => {
        return wheel.id === order.wheelId
    })
    
    
    const totalPrice = chosenPaint.price + chosenInterior.price + chosenTech.price + chosenWheel.price
    
    const costString = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    }) 
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = `<ul>`

    const listItems = orders.map(buildOrder)
    
    html += listItems.join("")
    html += `</ul>`
    return html
}
