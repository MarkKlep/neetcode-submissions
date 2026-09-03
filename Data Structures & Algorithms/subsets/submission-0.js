class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const subset = [];

        bt(0);

        return res;

        function bt(i) {
            if (i >= nums.length) {
                res.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            bt(i + 1);

            subset.pop();
            bt(i + 1);
        }
    }
}
