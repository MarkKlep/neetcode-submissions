class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const token of tokens) {
            if (!isNaN(+token)) {
                stack.push(+token);
            } else {
                const num2 = stack.pop();
                const num1 = stack.pop();

                if (token === '+') {
                    stack.push(num1 + num2);
                } else if (token === '-') {
                    stack.push(num1 - num2);
                } else if (token === '/') {
                    stack.push(Math.trunc(num1 / num2));
                } else if (token === '*') {
                    stack.push(num1 * num2);
                }
            }
        }

        return stack[stack.length - 1];
    }
}
