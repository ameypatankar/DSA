/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));
    return mergeSort(left, right);
};

function mergeSort(arr1, arr2) {
    let arrNew = [];
    let x1 = 0, x2 = 0;

    while (x1 < arr1.length && x2 < arr2.length) {
        if (arr1[x1] < arr2[x2]) {
            arrNew.push(arr1[x1]);
            x1++;
        } else {
            arrNew.push(arr2[x2]);
            x2++;
        }
    }
    return [...arrNew, ...arr1.slice(x1), ...arr2.slice(x2)];
}