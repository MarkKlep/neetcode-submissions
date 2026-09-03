class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [0];

        for (let i = 1; i <= n; i++) {
            res.push(this.hw(i));
        }

        return res;
    }

    hw(num) {
        let count = 0;

        while (num > 0) {
            num &= (num - 1);
            count++;
        }

        return count;
    }
}
