class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = height[0];
        let maxRight = height[height.length - 1];

        let left = 1;
        let right = height.length - 2;

        let water = 0;

        while (left <= right) {
            if (maxLeft > maxRight) {
                water += Math.max(0, maxRight - height[right]);

                maxRight = Math.max(maxRight, height[right]);
                right--;
            } else {
                water += Math.max(0, maxLeft - height[left]);

                maxLeft = Math.max(maxLeft, height[left]);
                left++;
            }
        }

        return water;
    }
}
