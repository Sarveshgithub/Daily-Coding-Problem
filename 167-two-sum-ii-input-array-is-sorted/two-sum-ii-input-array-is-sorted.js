/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0 , r = numbers.length - 1
    while(l < r){
        if((numbers[l] + numbers[r]) == target){
            console.log('rrr',l,r)
            break
        }
        if( (numbers[l] + numbers[r]) > target){
            r--
        }else{
            l++
        }
    }
    console.log('rrr',l+1,r+1)
    return [l+1,r+1]

};