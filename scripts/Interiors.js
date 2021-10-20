import { getInteriors, setInterior } from "./database.js";

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const chosenOption = changeEvent.target.value
            setInterior(parseInt(chosenOption))
        }
    }
)

const interiorsArr = getInteriors()

export const interiors = () => {
    let html = `
        <select id="interiors">
        <option value="0">Please choose a color...</option>
        `
    for (const interior of interiorsArr) {
        html += `<option value="${interior.id}">${interior.type}</option>`
    }
    html+= `</select>`
    
    return html
}