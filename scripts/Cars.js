import { Wheels } from "./Wheels.js";
import { Technologies } from "./Technologies.js";
import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { addCustomOrder } from "./database.js";
import { Orders } from "./Orders.js"


document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "orderButton") {
        addCustomOrder()
    }
} )

export const Cars = () => {
    return `${Wheels()}
    ${Technologies()}
    ${Paints()}
    ${Interiors()}
    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>
    
    <article>
        <h2>Orders</h2>
        ${Orders()}
    </article>`
    

}