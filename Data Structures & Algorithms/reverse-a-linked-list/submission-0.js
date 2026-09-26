/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return null;
        if (!head.next) return head;

        let fst = head;
        let scd = head.next;
        head.next = null;

        // f -> s -> *
        while (scd) {
            const tmp = scd.next;
            scd.next = fst;
            fst = scd;
            scd = tmp;
        }

        return fst;
    }
}
