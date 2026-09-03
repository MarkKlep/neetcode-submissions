class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const set1 = {};
        const set2 = {};

        for (let i = 0; i < s.length; i++) {
            set1[s[i]] = (set1[s[i]] ?? 0) + 1;
            set2[t[i]] = (set2[t[i]] ?? 0) + 1;
        }

        for (const char in set1) {
            if (set1[char] !== set2[char]) return false;
        }

        return true;
    }
}
