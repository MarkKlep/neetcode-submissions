class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;

        const setRow = new Set();
        const setCol = new Set();

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 0) {
                    setRow.add(i);
                    setCol.add(j);
                }
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (setRow.has(i) || setCol.has(j)) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
