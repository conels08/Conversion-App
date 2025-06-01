/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("number-of-units")
let inputAmount = document.querySelectorAll(".input-amount")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(event) {
    event.preventDefault()
    
    const inputValue = Number(inputEl.value)
    
    const meters = feetToMeters(inputValue)
    const feet = metersToFeet(inputValue)
    const gallons = litersToGallon(inputValue)
    const liters = gallonsToLiters(inputValue)
    const lbs = kgToLbs(inputValue)
    const kg = lbsToKg(inputValue)
    
    document.getElementById("output-feet").textContent = `${inputValue} meters = ${feet} feet`
    document.getElementById("output-meters").textContent = `${inputValue} feet = ${meters} meters`

    document.getElementById("output-gallons").textContent = `${inputValue} liters = ${gallons} gallons`
    document.getElementById("output-liters").textContent = `${inputValue} gallons = ${liters} liters`

    document.getElementById("output-pounds").textContent = `${inputValue} kilos = ${lbs} pounds`
    document.getElementById("output-kilos").textContent = `${inputValue} pounds = ${kg} kilos`
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
