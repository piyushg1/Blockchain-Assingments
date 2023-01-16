/**
 * Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
 */

function primeFactorial(a, b) {
    for (let i = a; i < b; i++) {
        if (isPrime(i) === true) {
            console.log(`Factorial of ${i} is : ${factorial(i)}`)
        }
    }
}

function isPrime(num) {
    if (num == 1) {
        return false
    }

    for (let i = 2; i < Math.round(Math.sqrt(num) + 1); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function factorial(num) {
    if (num == 0 || num == 1) {
        return 1
    }
    return num * factorial(num - 1)
}

primeFactorial(1, 100)