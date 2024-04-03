/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let a = new Set()
    for(let i = 0; i < nums.length; i++){
        if(a.has(nums[i])){
            return true
            break
        }
        a.add(nums[i])
    }
    return false
};