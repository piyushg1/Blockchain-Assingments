/**
 * Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10
 */

function pattern() {
    let s = "", cnt = 1
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j <= i; j++) {
            s += cnt
            cnt++
        }
        s += '\n'
    }
    console.log(s)
}
pattern()