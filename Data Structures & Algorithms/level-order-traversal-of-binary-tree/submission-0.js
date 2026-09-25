/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        const queue = [root];
        const levels = [];

        while (queue.length > 0) {
            const size = queue.length;
            levels.push([]);

            for (let i = 0; i < size; i++) {
                const node = queue.shift();

                const left = node.left;
                const right = node.right;

                if (left) {
                    queue.push(left);
                }
                if (right) {
                    queue.push(right);
                }

                levels.at(-1).push(node.val);
            }
        }

        return levels;
    }
}
