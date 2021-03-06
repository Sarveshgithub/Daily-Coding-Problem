// Given a list of numbers, return whether any two sums to k. For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

function main(arr, k) {
    const unique = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (unique.has(arr[i]))
            return true;
        unique.add(k - arr[i])
    }
    return false;
}

console.log(main([1, 2, 2,], 3)) //true
console.log(main([1, 2, 2,], 1)) //false
console.log(main([1, 2, 2,], 5)) //false


