class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const set = [...intervals, newInterval];
        const sorted = set.sort((a, b) => a[0] - b[0]);

        const res = [sorted[0]];
        for (let i = 1; i < sorted.length; i++) {
            const end = res.at(-1)[1];
            const startNext = sorted[i][0];

            if (end >= startNext) {
                res.at(-1)[1] = Math.max(end, sorted[i][1]);
            } else {
                res.push(sorted[i]);
            }
        }

        return res;
    }
}
