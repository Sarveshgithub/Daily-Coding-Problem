/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let c = 0
    for(let i = s.length - 1 ; i >= 0; i--){
        if(s[i] != ' '){
            c++
        }
        if(c > 0 && s[i] == ' '){
            break
        }
    }
    //console.log('c>',c)
    return c
}