/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    rev(0,nums.length-1)
    function rev(first, last ){
       
       while(first < last){
        var a = nums[first]
        nums[first] = nums[last]
        nums[last] = a
        first++
        last--
       }
       console.log(nums)
    }
    rev(0,k-1)
    rev(k,nums.length  -1)
};
