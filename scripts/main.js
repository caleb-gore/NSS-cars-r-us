import { Cars } from "./Cars.js"

const mainContainer = document.querySelector("#content")


const renderAllHTML = () => {
    mainContainer.innerHTML = Cars()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating Html...")
    // renderAllHTML()
})

