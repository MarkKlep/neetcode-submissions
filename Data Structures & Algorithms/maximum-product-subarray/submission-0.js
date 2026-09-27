class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currMax = nums[0];
        let currMin = nums[0];
        let totalMax = nums[0];

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < 0) {
                [currMax, currMin] = [currMin, currMax];
            }

            currMax = Math.max(nums[i], currMax * nums[i]);
            currMin = Math.min(nums[i], currMin * nums[i]);

            totalMax = Math.max(totalMax, currMax);
        }

        return totalMax;
    }
}
