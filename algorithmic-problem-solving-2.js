// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function sum (num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        // if the num is divisible by 3 or 5, add it to the sum
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(sum)
            console.log(i)
            sum+=i
        }
    }
    return sum
}

console.log(sum(1000))