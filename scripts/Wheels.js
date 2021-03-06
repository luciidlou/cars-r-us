import { getWheels, setWheel } from "./dataAccess.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            setWheel(parseInt(chosenOption)) 
        }
    }
)

const wheelsArr = getWheels()

export const wheels = () => {
    let html = `
        <select id="wheels">
        <option value="0">Please choose a set of wheels...</option>
        `
    for (const wheel of wheelsArr) {
        html += `<option value="${wheel.id}">${wheel.type}</option>`
    }
    html+= `</select>`
    
    return html
}