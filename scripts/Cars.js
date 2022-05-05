import { Wheels } from "./Wheels.js";
import { Technologies } from "./Technologies.js";
import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { addCustomOrder } from "./database.js";
import { Orders } from "./Orders.js"
import { Types } from "./Types.js";


document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "orderButton") {
        // pushes custom order to the database
        addCustomOrder()

        const orderHTML = document.querySelector(".orders")
        orderHTML.innerHTML += Orders()

        // reset selections 
        const selections = document.querySelectorAll('#paint, #interior, #tech, #wheel, #type')
        selections.forEach(selection => selection.selectedIndex = 0)
    }
} )

export const Cars = () => {
    return `${Wheels()}
    ${Technologies()}
    ${Paints()}
    ${Interiors()}
    ${Types()}
    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>
    
    <article>
        <h2>Orders</h2>
        <ul class="orders">
        </ul>
    </article>`
}