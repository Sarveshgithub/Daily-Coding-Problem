/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, k =0
    for(let i = 0 ; i < nums.length ; i++){
        if(count ==0){
            k = nums[i]
        }
        if (k == nums[i]){
            count++
        }else{
            count--
        }
        
    }
    console.log(k)
    return k
};