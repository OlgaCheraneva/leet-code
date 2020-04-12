// There is a pizza with 3n slices of varying size, you and your friends will take slices of pizza as follows:

// You will pick any pizza slice.
// Your friend Alice will pick next slice in anti clockwise direction of your pick.
// Your friend Bob will pick next slice in clockwise direction of your pick.
// Repeat until there are no more slices of pizzas.
// Sizes of Pizza slices is represented by circular array slices in clockwise direction.

// Return the maximum possible sum of slice sizes which you can have.

/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
    if (!Array.isArray(slices) || slices.length === 0) return 0;
    if (slices.length === 1) return slices[0];

    return Math.max(maxSize(slices.slice(0, -1)), maxSize(slices.slice(1)));
};

function maxSize(slices) {
    let previous = 0;
    let current = slices[0];

    for (let i = 1; i < slices.length; i++) {
        const tmp = current;
        current = Math.max(slices[i] + previous, current);
        previous = tmp;
    }

    return current;
}

const slices = [1, 2, 3, 4, 5, 6];
console.log(maxSizeSlices(slices));
