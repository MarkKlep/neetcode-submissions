class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            
            left++;
            right--;
        }
    }
}

// [a b o b y s]
// reversed: [s y b o b a]
