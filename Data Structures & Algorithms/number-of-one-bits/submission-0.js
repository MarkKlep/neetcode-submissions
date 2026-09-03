class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        // n & (n - 1)

        while (n > 0) {
            const bit = n & 1;

            if (bit === 1) count++;
            n = n >> 1;
        }

        return count;
    }
}
