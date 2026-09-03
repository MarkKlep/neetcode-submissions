class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // n
        // for range 0 to 2n
        // ans[i] = nums[i % n]

        // TC: O(2n) = O(n)
        // SC: O(n)
        const n = nums.length;
        const ans = Array(2 * n);

        for (let i = 0; i < 2 * n; i++) {
            ans[i] = nums[i % n];
        }

        return ans;
    }
}
