/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    // Sort the array to ensure that the shortest string comes first
    strs.sort();
    
    // Take the first string as a reference
    let prefix = strs[0];
    
    // Iterate through the characters of the reference string
    for (let i = 0; i < prefix.length; i++) {
        // Compare the character of the reference string with corresponding characters in other strings
        for (let j = 1; j < strs.length; j++) {
            if (prefix[i] !== strs[j][i]) {
                return prefix.slice(0, i); // Return the prefix found so far
            }
        }
    }
    return prefix;
};

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
