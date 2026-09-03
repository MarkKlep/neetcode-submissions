function alphaNumeric(char) {
    const charCode = char.charCodeAt(0);

    if (
        charCode >= 48 && charCode <= 56 ||
        charCode >= 65 && charCode <= 90 || 
        charCode >= 97 && charCode <= 122
    ) {
        return true;
    }

    return false;
}

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

            if (!alphaNumeric(left)) {
                i++;
                continue;
            } else if (!alphaNumeric(right)) {
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
