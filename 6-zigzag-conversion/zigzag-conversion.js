/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1){
        return s
    }
    let res = '',inc
    for(let i = 0 ; i < numRows ; i++){
        inc = 2 * (numRows-1)
        for( let j = i ; j < s.length ; j = j+ inc){
             res += s[j]
            if( i > 0 && i < numRows -1 && ( j + inc - 2*i ) < s.length){
                res+= s[j + inc - 2*i]
            }
        }
        //console.log('res>>',res,inc)
    }
    return res
};