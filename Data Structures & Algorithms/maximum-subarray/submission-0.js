class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if (nums.length === 0) return 0;

        let res = nums[0];
        let maxSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            maxSum = Math.max(nums[i], maxSum + nums[i]);
            res = Math.max(res, maxSum);
        }

        return res;
    }
}
