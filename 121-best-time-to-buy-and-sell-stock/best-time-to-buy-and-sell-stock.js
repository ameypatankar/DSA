/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max_profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i];
        }
        if (min < prices[i]) {
            if (prices[i] - min > max_profit) {
                max_profit = prices[i] - min;
            }
        }
    }
    return max_profit;  
};