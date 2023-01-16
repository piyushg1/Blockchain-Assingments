/**
 * Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000
 */

function sumOfMultiples() {
    let res = 0
    for (let index = 0; index < 1001; index++) {
        if (index % 3 == 0 || index % 5 == 0) {
            res += index
        }
    }
    return res
}

console.log(`the sum of multiples of 3 and 5 under 1000 is: ${sumOfMultiples()}`)