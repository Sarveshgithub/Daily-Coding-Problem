/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0
    for(let i = 1 ; i < nums.length; i++ ){
        if(nums[k] != nums[i]){
            nums[k+1] = nums[i]
            k++
        }
    }
    console.log(nums , k+1)
    return k+1
};