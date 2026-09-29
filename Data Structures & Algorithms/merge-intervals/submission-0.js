class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length === 0) return [];

        intervals.sort((a, b) => a[0] - b[0]);

        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const last = res.at(-1);
            const end = last[1];

            if (end >= intervals[i][0]) {
                last[1] = Math.max(end, intervals[i][1]);
            } else {
                res.push(intervals[i]);
            }
        }

        return res;
    }
}
