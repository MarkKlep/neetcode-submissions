class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const merged = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            const end = merged.at(-1)[1];
            const nextStart = intervals[i][0];

            if (end > nextStart) {
                merged.at(-1)[1] = Math.min(end, intervals[i][1]);
            } else {
                merged.push(intervals[i]);
            }
        }

        return intervals.length - merged.length;
    }
}
