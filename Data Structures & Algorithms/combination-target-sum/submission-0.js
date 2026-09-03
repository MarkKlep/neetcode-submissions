class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const subset = [];

        bt(0, 0);

        return res;

        function bt(start, sum) {
            if (sum > target) return;
            if (sum === target) {
                res.push([...subset]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                subset.push(nums[i]);
                bt(i, sum + nums[i]);
                subset.pop();
            }
        }
    }
}
