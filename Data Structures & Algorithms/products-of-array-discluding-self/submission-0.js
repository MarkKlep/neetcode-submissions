class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];

        const prefixProd = new Array(nums.length);
        prefixProd[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            prefixProd[i] = prefixProd[i - 1] * nums[i];
        }

        const sufixProd = new Array(nums.length);
        sufixProd[nums.length - 1] = nums[nums.length - 1];
        for (let i = nums.length - 2; i >= 0; i--) {
            sufixProd[i] = sufixProd[i + 1] * nums[i];
        }

        for (let i = 0; i < nums.length; i++) {
            res[i] = (prefixProd[i - 1] ?? 1) * (sufixProd[i + 1] ?? 1);
        }

        return res;
    }
}
