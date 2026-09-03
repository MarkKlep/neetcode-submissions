/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(root) {
        if (!root) return null;

        const map = new Map();

        bfs(root);

        return map.get(root);

        function bfs(node) {
            const queue = [node];
            map.set(node, new Node(node.val))

            while (queue.length > 0) {
                const curr = queue.shift();

                for (const nei of curr.neighbors) {
                    if (!map.has(nei)) {
                        queue.push(nei);
                        map.set(nei, new Node(nei.val));
                    }
                    map.get(curr).neighbors.push(map.get(nei));
                }
            }
        }
    }   
}

