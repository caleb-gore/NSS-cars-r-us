import { getColors, setColor } from "./database.js"

const paints = getColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenOption = paints.find(
                (paint) => {
                    return paint.id === parseInt(changeEvent.target.value)
                }
            )
            setColor(chosenOption.id)
            // window.alert(`You have chosen ${chosenOption.color}`)
        }
    }
)
export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a technology package</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html
}