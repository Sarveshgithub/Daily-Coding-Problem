/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res = 0 , l = 0 , r = 0 , long 
    while(r < nums.length - 1){
        long = 0
        for ( let i = l ; i < r+1; i++){
             long = Math.max(long, (i + nums[i]))
        }
        l = r+1
        r = long
        res = res +1
    }
    console.log('ress',res)
    return res
};