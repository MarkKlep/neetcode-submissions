class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            let len = 1;

            while (nums.includes(curr + 1)) {
                curr++;
                len++;
            }
            count = Math.max(count, len);
        }
        return count;
    }
}
