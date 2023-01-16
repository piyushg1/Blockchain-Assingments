/**
 * Write a program to find whether a given number is special number or

not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 14
 */

let num = 145

function factorial(num) {
    if (num == 0 || num == 1) {
        return 1
    }
    return num * factorial(num - 1)
}

function specialNo(num) {
    let cpy = num, res = 0, fact

    while (num > 0) {
        rem = num % 10
        res += factorial(rem)
        num = Math.floor(num / 10)
    }
    return res == cpy
}

if (specialNo(num)) {
    console.log(`${num} is special no.`)
}
else {
    console.log(`${num} is not special no.`)
}