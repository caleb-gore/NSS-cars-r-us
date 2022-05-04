import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            const chosenOption = wheels.find(
                (wheel) => {
                    return wheel.id === parseInt(changeEvent.target.value)
                }
            )
            setWheel(chosenOption.id)
            window.alert(`You have chosen ${chosenOption.wheel}`)
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select a technology package</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.wheel}</option>`
    }

    html += "</select>"
    return html
}

/* 

Document is the entire document/page
add event listener listens for an event on the page
change is the the specific type of even that is being listened for 
change event is the parameter for the function that is run when a change is detected
if the id of the target of the change event equals wheel
the window should alert that the user has selected that option
how does the computer know which option is selected
if the value of the option is the same as the id of the wheel object, then it should display that object's name in the window alert
using the .find() method, return a true or false statement.

*/
