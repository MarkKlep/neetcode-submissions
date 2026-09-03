class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ')' : '(',
            ']' : '[',
            '}' : '{',
        };
        const stack = [];
        for (const ch of s) {
            if (map[ch]) {
                const openBracket = map[ch];
                const bracket = stack.pop();
                if (openBracket !== bracket) return false;
            } else {
                stack.push(ch);
            }
        }

        return stack.length === 0;
    }
}
