class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const m = text1.length;
        const n = text2.length;

        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                const top = dp[i - 1][j];
                const left = dp[i][j - 1];
                const topLeft = dp[i - 1][j - 1];

                if (text1[i - 1] === text2[j - 1]) {
                    dp[i][j] = 1 + topLeft;
                } else {
                    dp[i][j] = Math.max(left, top);
                }
            }
        }

        return dp[m][n];
    }
}

/*
text1="abcd"
text2="efgh"

   '' a b c d
'' 0. 0 0 0 0
e  0  0 0 0 0
f  0  0 0 0 0
g. 0  0 0 0 0
h. 0  0 0 0 0

*/

/*
    '' c a t
''   0 0 0 0
c    0 1 1 1
r.   0 1 1 1
a.   0 1 2 2
b.   0 1 2 2
t.   0 1 2 3
*/
