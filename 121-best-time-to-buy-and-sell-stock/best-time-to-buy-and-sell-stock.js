/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentStock = prices[0],profit = 0,tempPro = 0
    for(let i = 1 ; i < prices.length ; i++){
        if( prices[i] < currentStock){
            currentStock = prices[i]
        }else{
             tempPro = prices[i] - currentStock
        }
        if(tempPro > profit ){
            profit = tempPro
        }
    }
    return profit
    console.log(profit)
};