class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;
        let count = 1;
        let currCount = 1;
        nums.sort((a, b) => a - b);
        nums = Array.from(new Set(nums));
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] + 1 === nums[i + 1]) {
                currCount++;
            } else {
                count = Math.max(count, currCount);
                currCount = 1;
            }
        }
        count = Math.max(count, currCount);
        // for (let i = 0; i < nums.length; i++) {
        //     let curr = nums[i];
        //     let len = 1;

        //     while (nums.includes(curr + 1)) {
        //         curr++;
        //         len++;
        //     }
        //     count = Math.max(count, len);
        // }
        return count;
    }
}
