class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n = nums.length;

        const dp = Array(n).fill(false);

        dp[0] = true;

        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (dp[j] && nums[j] >= i - j) {
                    dp[i] = true;
                }
            }
        }

        return dp[n - 1];
    }
}
