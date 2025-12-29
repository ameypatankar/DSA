/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max_count = 0;
    let curr_count = 0;
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] === 1) curr_count ++;
        if(nums[i] === 0) {
            max_count = Math.max(curr_count, max_count);
            curr_count = 0;
        }
    }
    return Math.max(curr_count, max_count);
};