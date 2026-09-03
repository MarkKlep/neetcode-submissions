class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        for (let i = 0; i < nums.length; i++) {
            freq[nums[i]] = (freq[nums[i]] ?? 0) + 1;
        }

        return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, k).map(t => t[0]);
    }
}
