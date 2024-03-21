/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let currentStock = prices[0] , buy = false
    for(let i = 1 ; i < prices.length ; i++){
        if(prices[i] > prices[i-1]){
            profit = profit + (prices[i] - prices[i-1])
        }
    }
    console.log(profit)
    return profit  
};