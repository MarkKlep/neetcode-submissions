class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let minPrice = Infinity;

        for (const p of prices) {
            minPrice = Math.min(p, minPrice);
            profit = Math.max(p - minPrice, profit);
        }

        return profit;
    }
}
