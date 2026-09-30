class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const n = s.length;

        let maxLen = 0;

        let left = 0;
        let right = 0;

        for (let i = 0; i < n; i++) {
            expandFromCenter(i, i);
            expandFromCenter(i, i + 1);
        }

        return s.slice(left, right + 1);

        function expandFromCenter(l, r) {
            let leftBoundary = 0;
            let rightBoundary = 0;

            while (l >= 0 && r <= n - 1 && s[l] === s[r]) {
                leftBoundary = l;
                rightBoundary = r;

                l--;
                r++;
            }

            const currLen = rightBoundary - leftBoundary + 1;
            if (currLen > maxLen) {
                maxLen = currLen;

                left = leftBoundary;
                right = rightBoundary;
            }
        }
    }
}
