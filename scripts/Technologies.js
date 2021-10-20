import { getTechnologies, setTechnology } from "./database.js";

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologies") {
            const chosenOption = changeEvent.target.value
            setTechnology(parseInt(chosenOption)) 
        }
    }
)

const technologiesArr = getTechnologies()

export const technologies = () => {
    let html = `
        <select id="technologies">
        <option value="0">Please choose a color...</option>
        `
    for (const technology of technologiesArr) {
        html += `<option value="${technology.id}">${technology.package}</option>`
    }
    html+= `</select>`
    
    return html
}