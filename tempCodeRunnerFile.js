// Given a list of numbers, return whether any two sums to k. For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

function main(arr, k) {
    const unique = new Set();
    arr.map(val => {
        if (unique.has(val))
            return true;
        unique.add(k - val)
    })
    return false;
}

console.log(main([1,2,2,],2))


