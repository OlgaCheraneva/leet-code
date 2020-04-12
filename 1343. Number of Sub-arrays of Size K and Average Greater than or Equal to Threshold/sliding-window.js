/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let sum = (count = 0);
    let left = (right = 0);
    while (right <= arr.length) {
        if (right - left == k) {
            if (sum / k >= threshold) {
                count++;
            }
            sum -= arr[left++];
        }
        sum += arr[right++];
    }
    return count;
};
