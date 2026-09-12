class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (!this.minStack.length || val < this.minStack.at(-1)) {
            this.minStack.push(val);
        } else {
            this.minStack.push(this.minStack.at(-1));
        }

        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1) ?? -1;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1) ?? -1;
    }
}
