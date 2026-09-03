class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const queue = [];
        const set = new Set();

        let maxLength = 0;

        for (const ch of s) { // O(n)
            while (set.has(ch)) { // O(1)
                const removed = queue.shift(); // O(n)
                set.delete(removed);
            }

            queue.push(ch);
            set.add(ch);
            maxLength = Math.max(maxLength, queue.length);
        }

        return maxLength;
    }

    // Input: aabc
    // Out: a
    // ml: 1
}
