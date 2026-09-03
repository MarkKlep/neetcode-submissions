class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const str of strs) {
            res += str.length + '#' + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            let d = '';
            while (str[i] !== '#') {
                d += str[i++];
            }

            d = Number(d);
            i++;
            let subStr = '';

            while (d > 0) {
                subStr += str[i++];
                d--;
            }
            res.push(subStr);
        }
        return res;
    }
}
