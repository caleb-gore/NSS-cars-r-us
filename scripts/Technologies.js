import { getTechnologies, setTech } from "./database.js"

const techs = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = techs.find(
                (tech) => {
                    return tech.id === parseInt(changeEvent.target.value)
                }
            )
            setTech(chosenOption.id)
            window.alert(`You have chosen ${chosenOption.package}`)
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.package}</option>`
    }

    html += "</select>"
    return html
}