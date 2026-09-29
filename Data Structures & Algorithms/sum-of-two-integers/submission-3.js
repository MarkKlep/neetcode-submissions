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
            const bit1 = a & 1;
            a = a >> 1;

            const bit2 = b & 1;
            b = b >> 1;

            const sum = bit1 ^ bit2 ^ carry;
            carry = (bit1 && bit2) | (bit1 & carry) | (bit2 & carry);

            res = res | (sum << i);
        }

        return res;
    }
}
