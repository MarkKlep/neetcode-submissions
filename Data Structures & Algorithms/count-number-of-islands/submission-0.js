class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
numIslands(grid) {
	const m = grid.length;
	const n = grid[0].length;

	let components = 0;

	for (let i = 0 ; i < m; i++) {
	for (let j = 0;  j < n; j++) {
		if (grid[i][j] === '1') {
			dfs(i, j);
			components++;
}
}
}

return components;

function dfs(i, j) {	
	if (grid[i][j] === '0') return;
	
	grid[i][j] = '0';

	if (i - 1 >= 0) dfs(i - 1, j);
	if (i + 1 < m) dfs(i + 1, j);
	if (j - 1 >= 0) dfs(i, j - 1);
	if (j + 1 < n) dfs(i, j + 1);
}
}

}
