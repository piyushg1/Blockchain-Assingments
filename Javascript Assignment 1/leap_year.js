/**
 * Write a program to find whether a given year is a leap year or not.
 */
let yr = 2000

function isLeap(yr) {
    if (yr % 400 == 0 && yr % 100 == 0) {
        return true
    }
    if (yr % 100 != 0 && yr % 4 == 0) {
        return true
    }
    return false
}

if (isLeap(yr)) {
    console.log(`${yr} is a leap year`)
}
else {
    console.log(`${yr} is not a leap year`)
}