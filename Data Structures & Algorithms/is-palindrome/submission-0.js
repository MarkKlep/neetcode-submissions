const alphanumeric = /[a-zA-Z0-9]/;
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;


        while (i < j) {
            let left = s[i];
            let right = s[j];

            if (!alphanumeric.test(left)) {
                i++;
                continue;
            } else if (!alphanumeric.test(right)) {
                j--;
                continue;
            }

            if (left.toLowerCase() !== right.toLowerCase()) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
