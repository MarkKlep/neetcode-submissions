class PrefixTree {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for (const ch of word) {
            if (!curr[ch]) curr[ch] = {};
            curr = curr[ch];
        }

        curr['end'] = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for (const ch of word) {
            if (!curr[ch]) return false;
            curr = curr[ch];
        }

        return curr['end'] === true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for (const ch of prefix) {
            if (!curr[ch]) return false;
            curr = curr[ch];
        }

        return true;
    }
}
