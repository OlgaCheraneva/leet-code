// Implement the class ProductOfNumbers that supports two methods:

// 1. add(int num)

// Adds the number num to the back of the current list of numbers.
// 2. getProduct(int k)

// Returns the product of the last k numbers in the current list.
// You can assume that always the current list has at least k numbers.
// At any time, the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing.

var ProductOfNumbers = function() {
    this.numbers = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (typeof num !== 'number')
        throw new Error('Invalid type. Number was expected');
    this.numbers.push(num);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (typeof k !== 'number')
        throw new Error('Invalid type. Number was expected');

    const length = this.numbers.length;
    if (length === 0) return 0;
    const productCount = Math.min(k, length);
    let result = 1;
    for (let i = length - 1; i >= length - productCount; i--) {
        result *= this.numbers[i];
    }

    return result;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
var obj = new ProductOfNumbers();
obj.add(3);
obj.add(0);
obj.add(2);
obj.add(5);
obj.add(4);
var param_1 = obj.getProduct(2);
var param_2 = obj.getProduct(3);
var param_3 = obj.getProduct(4);
obj.add(8);
var param_4 = obj.getProduct(2);
