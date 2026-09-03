class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort((s1, s2) => s1 > s2 ? 1 : -1);

        let p = 0;
        while (p < strs[0].length && strs[0].charAt(p) === strs.at(-1).charAt(p)) {
            p++;            
        }

        return strs[0].slice(0, p);
    }
}
