/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastIndex = nums.length -1
    let goal = nums[lastIndex]
    for(let i = lastIndex ; i >= 0 ; i--){
        if( i + nums[i] >= goal){
            goal = i
        }
    }
    console.log(goal)
    return goal == 0

};