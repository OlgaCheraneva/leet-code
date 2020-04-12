/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
    let count = 0;
    let max = 0;

    light.forEach((l, i) => {
        max = Math.max(max, l);
        // Max index of turned on bulb equals to the number of turned on bulbs
        if (max === i + 1) {
            count++;
        }
    });

    return count;
};
