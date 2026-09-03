class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const table = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (table[target - num] !== undefined) {
                return [table[target - num], i];
            }
            table[num] = i;
        }
        return [-1, -1];
    }
}
