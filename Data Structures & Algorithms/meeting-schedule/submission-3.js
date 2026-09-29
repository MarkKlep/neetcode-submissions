/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const end = res.at(-1).end;
            const nextStart = intervals[i].start;

            if (end > nextStart) return false;
            else {
                res.push(intervals[i]);
            }
        }

        return true;
    }
}
