import { getColors, getInteriors, getOrders, getTechnologies, getWheels } from "./database.js"

const colors = getColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()



const buildOrderListItem = (order) => {
    const foundColor = colors.find (
        color => {
            return color.id === order.colorId
        }
    )
    const foundInterior = interiors.find(
        interior => {
            return interior.id === order.interiorId
        }
    )
    const foundTechnology = technologies.find(
        technology => {
            return technology.id === order.technologyId
        }
    )
    const foundWheel = wheels.find(
        wheel => {
            return wheel.id === order.wheelId
        }
    )
    const totalCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheel.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
        })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}