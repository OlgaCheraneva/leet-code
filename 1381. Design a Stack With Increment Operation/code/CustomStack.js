// Design a stack which supports the following operations.

// Implement the CustomStack class:

// CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number
// of elements in the stack or do nothing if the stack reached the maxSize.
// void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.
// int pop() Pops and returns the top of stack or -1 if the stack is empty.
// void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are
// less than k elements in the stack, just increment all the elements in the stack.

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
    this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.size !== this.maxSize) {
        this.size++;
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.size === 0) {
        return -1;
    }
    this.size--;
    return this.stack.pop();
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    const count = Math.min(this.size, k);
    for (let i = 0; i < count; i++) {
        this.stack[i] += val;
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
