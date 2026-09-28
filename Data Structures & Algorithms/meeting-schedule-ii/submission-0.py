"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

import heapq

#[(0,40),(5,10),(15,20)]

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        intervals.sort(key=lambda x:x.start)

        heap = []

        for ob in intervals:
            s = ob.start
            e = ob.end

            if len(heap) == 0:
                heapq.heappush(heap,e)
            elif heap[0] <= s:
                heapq.heappop(heap)
                heapq.heappush(heap, e)
            else:
                heapq.heappush(heap, e)

        return len(heap)

        