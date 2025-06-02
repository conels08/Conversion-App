/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("number-of-units")
let inputAmount = document.querySelectorAll(".input-amount")
const convertBtn = document.getElementById("convert-btn")

let feetOut = document.getElementById("output-feet")
let metersOut = document.getElementById("output-meters")
let gallonsOut = document.getElementById("output-gallons")
let litersOut = document.getElementById("output-liters")
let poundsOut = document.getElementById("output-pounds")
let kilosOut = document.getElementById("output-kilos")

const mirrorSpan = document.getElementById("width-mirror")

// Mirror the input value in the span element

inputEl.addEventListener("input", function () {
    mirrorSpan.textContent = inputEl.value
    const width = mirrorSpan.offsetWidth + 10 // add a little padding
    inputEl.style.width = width + "px"
})

// Add event listener to the convert button

convertBtn.addEventListener("click", function(event) {
    event.preventDefault()
    
    const inputValue = Number(inputEl.value)
    
    const meters = feetToMeters(inputValue)
    const feet = metersToFeet(inputValue)
    const gallons = litersToGallon(inputValue)
    const liters = gallonsToLiters(inputValue)
    const lbs = kgToLbs(inputValue)
    const kg = lbsToKg(inputValue)
    
    feetOut.textContent = `${inputValue} meters = ${feet} feet`
    metersOut.textContent = `${inputValue} feet = ${meters} meters`

    gallonsOut.textContent = `${inputValue} liters = ${gallons} gallons`
    litersOut.textContent = `${inputValue} gallons = ${liters} liters`

    poundsOut.textContent = `${inputValue} kilos = ${lbs} pounds`
    kilosOut.textContent = `${inputValue} pounds = ${kg} kilos`
})

function feetToMeters(numOfFeet) {
    let meters = (numOfFeet / 3.281).toFixed(2)
    return meters
}

function metersToFeet(numOfMeters) {
    let feet = (numOfMeters * 3.281).toFixed(2)
    return feet
}

function litersToGallon(numOfLiters) {
    let gallons = (numOfLiters * 0.264).toFixed(2)
    return gallons
}

function gallonsToLiters(numOfGallons) {
    let liters = (numOfGallons / 0.264).toFixed(2)
    return liters
}

function kgToLbs(numOfKg) {
    let lbs = (numOfKg * 2.204).toFixed(2)
    return lbs
}

function lbsToKg(numOfLbs) {
    let kg = (numOfLbs / 2.204).toFixed(2)
    return kg
}
