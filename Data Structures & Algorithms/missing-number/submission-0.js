class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;
        const set = new Set(nums);

        for (let i = 0; i < n; i++) {
            if (!set.has(i)) return i;
        }

        return n;
    }
}
