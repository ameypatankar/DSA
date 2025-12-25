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
            let minus = prices[i] - min;
            if (minus > max_profit) {
                max_profit = minus;
            }
        }
    }
    return max_profit;  
};