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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let flag = false;

        const dfs = (node) => {
            if (!node) return;

            if (node.val === subRoot.val) {
                const res = this.isSame(node, subRoot);

                if (res) {
                    flag = true;
                }
            }

            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        return flag;
    }

    isSame(root1, root2) {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;

        if (root1.val !== root2.val) return false;

        const isLeft = this.isSame(root1.left, root2.left);
        const isRight = this.isSame(root1.right, root2.right);

        return isLeft && isRight;
    }
}
