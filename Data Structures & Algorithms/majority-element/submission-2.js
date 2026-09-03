class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const freq = new Map();

        for (const num of nums) {
            if (!freq.has(num)) {
                freq.set(num, 0);
            }

            const prev = freq.get(num);
            freq.set(num, prev + 1);
        }

        let moda = -1;
        let mostFreq = 0;
        for (const [key, count] of freq.entries()) {
            if (count > mostFreq) {
                moda = key;
                mostFreq = count;
            }
        }

        return moda;
$0
    }
}
