/**
 * Write a program to find the factorial of a number.
 */
let num = 6

function factorial(num) {
    if (num == 1 || num == 0) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(`factorial of ${num} is : ${factorial(num)}`)