/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xCopy = x;
    let num = Math.abs(x);
    let rev = 0;
    while (num > 0) {
        let last = num % 10;
        rev = (10 * rev) + last;
        num = Math.floor(num / 10);
    }
    let limit = Math.pow(2, 31);
    if (rev < -limit || rev > (limit - 1)) return 0;
    if (xCopy < 0) return -rev;
    return rev;
};