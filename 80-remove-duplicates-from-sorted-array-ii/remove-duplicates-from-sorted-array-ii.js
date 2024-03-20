/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0, temp = 0
    for(let i = 1 ; i <nums.length; i++){
        if(nums[k] != nums[i]){
           nums[k+1] = nums[i]
           k++ 
           temp=0
        }else if(nums[k] == nums[i] && temp ==0){
            nums[k+1] = nums[i]
            k++
            temp ++
        }
    }
    console.log( nums , k)
    return k + 1
};