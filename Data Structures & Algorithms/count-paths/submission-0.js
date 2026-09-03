class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({ length: m, }, () => Array(n).fill(1));

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                const top = dp[i - 1][j];
                const left = dp[i][j - 1];

                dp[i][j] = top + left;
            }
        }

        return dp[m - 1][n - 1];
    }
}
