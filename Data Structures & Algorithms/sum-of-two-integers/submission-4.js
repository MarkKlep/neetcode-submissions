class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        let res = 0;
        let carry = 0;

        for (let i = 0; i < 32; i++) {
            const b1 = a & 1;
            a = a >> 1;

            const b2 = b & 1;
            b = b >> 1;

            const sum = b1 ^ b2 ^ carry;
            carry = (b1 & b2) | (b1 & carry) | (b2 & carry);

            res = res | (sum << i);
        }

        return res;
    }
}
