/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let last = m + n - 1
    while(m > 0 && n > 0){
        if(nums2[n-1] > nums1[m-1]){
            nums1[last] = nums2[n-1]
            n--
        }else{
            nums1[last] = nums1[m-1]
            m--
        }
        last--
    }
    console.log(last,m,n)
    while(n > 0){
        nums1[last] = nums2[n-1]
        n--
        last--
    }
    //console.log('nums1',nums1)
        // for(let j = 0 ; j < n; j++){
        //     if(nums1[a] <= nums2[b]){
        //         res.push(nums1[a])
        //         a++
        //         break
        //     }else{
        //         res.push(nums2[b])
        //         b++
        //         break
        //     }
        // }
    

};