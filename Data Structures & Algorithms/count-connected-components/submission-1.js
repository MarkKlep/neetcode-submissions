class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const visited = new Set();
        let components = 0;

        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue;
            components++;
            dfs(i);
        }

        return components;

        function dfs(node) {
            // pr
            if (visited.has(node)) return;
            visited.add(node);

            // rec
            const neigs = edges.filter(([u, v]) => u === node || v === node)
            .map(([u , v]) => u === node ? v : u);
            for (const nei of neigs) {
                dfs(nei);
            }
        }
    }
}
