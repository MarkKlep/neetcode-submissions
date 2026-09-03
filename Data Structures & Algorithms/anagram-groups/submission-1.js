class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const map = {};

        for (const str of strs) {
            const freq = Array(26).fill(0);

            for (const c of str) {
                freq[c.charCodeAt(0) - 97]++;
            }

            const key = freq.join('|');

            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(str);
        }

        return Object.values(map);
    }
}
