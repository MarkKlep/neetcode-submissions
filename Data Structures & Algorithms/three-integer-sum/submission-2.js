class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const triplets = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] === nums[i - 1] && i > 0) continue;
            const a = nums[i];

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const b = nums[left];
                const c = nums[right];

                if (a + b + c === 0) {
                    triplets.push([a, b, c]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (a + b + c > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return triplets;
    }
}
