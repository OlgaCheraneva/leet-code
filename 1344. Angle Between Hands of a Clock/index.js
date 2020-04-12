// Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

// Example 1:
// Input: hour = 12, minutes = 30
// Output: 165

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    const minuteAngle = minutes * 6;
    const hourAngle = (hour % 12) * 30 + minutes * 0.5;
    const angle = Math.abs(minuteAngle - hourAngle);

    return Math.min(angle, 360 - angle);
};
