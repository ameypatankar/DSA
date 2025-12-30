/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let actualTotal = 0;
    let numsTotal = 0;
    let numsLength = nums.length;
    let missNum = 0;
    for(let i = 0; i< numsLength; i++) {
        numsTotal = numsTotal + nums[i];
    }
    actualTotal = (numsLength*(numsLength+1))/2;
    missNum = actualTotal - numsTotal;
    return missNum;
};