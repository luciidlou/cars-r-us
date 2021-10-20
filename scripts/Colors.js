import { getColors, setColor } from "./database.js";


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "colors") {
            const chosenOption = changeEvent.target.value
            setColor(parseInt(chosenOption))
        }
    }
)


const colorsArr = getColors()

export const colors = () => {
    let html = `
        <select id="colors">
        <option value="0">Please choose a color...</option>
        `
    for (const color of colorsArr) {
        html += `<option value="${color.id}">${color.type}</option>`
    }
    html+= `</select>`

    return html
}