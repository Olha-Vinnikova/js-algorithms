const maxProfit = (prices) => {
  let minPrice = prices[0];
  // let buyDay = 0;
  // let  minPriceDay = 0;
  let maxProfit = 0;

  for (let i=1; i< prices.length; i++) {
    if(prices[i] <minPrice ) {
      minPrice = prices[i];
      // minPriceDay = i;
    }
    
    const potentialProfit = prices[i] - minPrice;
    if(potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
      // buyDay = minPriceDay;
    }
  }
  // console.log('buyDay', buyDay)
  return maxProfit;
}

const prices = [9,2, 8, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit:", profit)