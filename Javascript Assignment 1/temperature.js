/**
 * Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
 */

let cel = 60
let far = 45

function celToFar(cel) {
    let far = cel * 9 / 5 + 32
    console.log(`${cel} celcius is equivalent to ${far} Fahrenheit`)
}
function farToCel(far) {
    let cel = (far - 32) / 9 * 5
    console.log(`${far} Fahrenheit  is equivalent to ${cel} celcius`)
}

celToFar(cel)
farToCel(far)