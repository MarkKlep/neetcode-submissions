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
     * @return {boolean}
     */
    isValidBST(root) {
        let flag = true;
        let prev = -Infinity;

        const inorder = (node) => {
            if (!node) return;

            inorder(node.left);
            if (prev >= node.val) {
                flag = false;
                return;
            }
            prev = node.val;
            inorder(node.right);
        }

        inorder(root);

        return flag;
    }
}
