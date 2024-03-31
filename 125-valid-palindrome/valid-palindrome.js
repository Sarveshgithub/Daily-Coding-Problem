/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    console.log(s)
    let l = 0 , r = s.length - 1, palindrom = true
    while(l < r){
        if(s[l] != s[r]){
            palindrom = false
            break
        }
        l++
        r--
    }
    return palindrom
};