class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const positiveArr = nums.filter(el => el > 0);
        const n = positiveArr.length;

        const set = new Set(positiveArr);

        for (let i = 1; i <= n; i++) {
            if (!set.has(i)) return i;
        }

        return n + 1;
    }
}
