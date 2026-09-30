class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
    const n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0];

    // 1
    const dp1 = Array(n - 1).fill(1);

    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i - 2] + nums[i], dp1[i - 1]);
    }

    // 2
    const dp2 = Array(n).fill(0);

    dp2[0] = -Infinity;
    dp2[1] = nums[1];
    dp2[2] = Math.max(nums[1], nums[2]);

    for (let i = 3; i < n; i++) {
        dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1]);
    }

    return Math.max(dp1[n - 2], dp2[n - 1]);
    }
}
