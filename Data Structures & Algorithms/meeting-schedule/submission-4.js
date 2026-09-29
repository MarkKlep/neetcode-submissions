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

        for (let i = 1; i < intervals.length; i++) {
            const end = intervals[i - 1].end;
            const nextStart = intervals[i].start;

            if (end > nextStart) return false;
        }

        return true;
    }
}
