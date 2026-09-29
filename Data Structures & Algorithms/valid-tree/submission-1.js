class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // n = e + 1
        if (n !== edges.length + 1) return false;

        const graph = {};
        for (let i = 0; i < n; i++) {
            graph[i] = [];
        }

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        // connected & cycles
        const visited = new Set([0]);
        let count = 0;
        const res = isCycled(0);
        if (res) return false;

        return count === n;

        function isCycled(node, parent = null) {
            count++;

            const neis = graph[node] || [];
            for (const nei of neis) {
                if (visited.has(nei) && nei !== parent) return true;
                if (!visited.has(nei)) {
                    visited.add(nei);
                    if (isCycled(nei, node)) return true;
                }
            }

            return false;
        }
    }
}
