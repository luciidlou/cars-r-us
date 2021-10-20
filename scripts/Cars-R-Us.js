import { colors } from "./Colors.js"
import { addCustomOrder, getOrders } from "./database.js"
import { interiors } from "./Interiors.js"
import { Orders } from "./Orders.js"
import { technologies } from "./Technologies.js"
import { wheels } from "./Wheels.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${colors()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiors()}
            </section>
            <section class="choices__technologies options">
                <h2>Technology Packages</h2>
                ${technologies()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Custom Order</button>
        </article>

        <article class="customOrders">
            <h2 class="orders-title">Custom Car Orders</h2>
            ${Orders()}         
        </article>
    `
}