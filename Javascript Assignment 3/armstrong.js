/**
 * Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153
 */

let num = 153

function armstrong(num) {
    let res = 0, rem = 0, cpy = num
    while (num > 0) {
        rem = num % 10
        res += rem * rem * rem
        num = Math.floor(num / 10)
    }
    return res == cpy
}

if (armstrong(num)) {
    console.log(`${num} is armstrong no.`)
}
else {
    console.log(`${num} is not armstrong no.`)
}