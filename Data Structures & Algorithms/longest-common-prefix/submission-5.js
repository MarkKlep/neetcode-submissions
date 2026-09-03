class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 1) return strs[0];

        const prefix = [];
        for (let i = 0; ; i++) {
            for (let j = 0; j < strs.length - 1; j++) {
                if (!strs[j][i] || strs[j][i] !== strs[j + 1][i]) {
                    return prefix.join('');
                }
            }
            prefix.push(strs[0][i]);
        }
    }
}
