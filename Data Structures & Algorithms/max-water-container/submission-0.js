class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let sq = 0;

        while (left < right) {
            const dist = right - left;
            const currSq = dist * Math.min(heights[left], heights[right]);
            sq = Math.max(sq, currSq);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return sq;
    }
}
