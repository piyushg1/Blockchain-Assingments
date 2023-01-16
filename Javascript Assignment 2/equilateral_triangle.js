/**
 * Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene
 */
let x = 10, y = 90, z = 1

function checkTriangle(x, y, z) {
    if (x === y && y === z && z === x) {
        console.log('It is an equilateral triangle')
    }
    else if (x === y || y === z || z === x) {
        console.log('It is an isoceles triangle')
    }
    else {
        console.log('It is a scalene triangle')
    }
}

checkTriangle(x, y, z)