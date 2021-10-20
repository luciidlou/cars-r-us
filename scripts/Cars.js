import { getCars, setCar } from "./database.js";

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "cars") {
            const chosenOption = changeEvent.target.value
            setCar(parseInt(chosenOption)) 
        }
    }
)


const carsArr = getCars()


export const cars = () => {
    let html = `
        <select id="cars">
        <option value="0">Please choose a car...</option>
        `
    for (const car of carsArr) {
        html += `<option value="${car.id}">${car.type}</option>`
    }
    html+= `</select>`
    
    return html
}