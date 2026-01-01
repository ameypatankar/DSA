/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Start from the last digit
    for (let i = digits.length - 1; i >= 0; i--) {
        // If current digit is less than 9, just add 1 and return
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        // If digit is 9, it becomes 0 (carry over)
        digits[i] = 0;
    }
    
    // If all digits were 9, we need an extra digit at the front
    digits.unshift(1);
    return digits;

};