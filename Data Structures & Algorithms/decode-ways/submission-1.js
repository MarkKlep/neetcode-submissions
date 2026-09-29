class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s[0] === '0') return 0;

        const n = s.length;
        const dp = Array(n + 1).fill(0);

        dp[0] = 1;
        dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            const one = +s[i - 1];
            const two = +(s[i - 2] + s[i - 1]);

            if (one >= 1) dp[i] += dp[i - 1];
            if (two >= 10 && two <= 26) dp[i] += dp[i - 2];
        }

        return dp[n];
    }
}
