class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const set1 = s.split('').sort((a, b) => a.localeCompare(b));
        const set2 = t.split('').sort((a, b) => a.localeCompare(b));

        return set1.join('') === set2.join('');
    }
}
