// Implement the class TweetCounts that supports two methods:
// 1. recordTweet(string tweetName, int time)

// Stores the tweetName at the recorded time (in seconds).
// 2. getTweetCountsPerFrequency(string freq, string tweetName, int startTime, int endTime)

// Returns the total number of occurrences for the given tweetName per minute, hour, or day (depending on freq) starting from the startTime (in seconds) and ending at the endTime (in seconds).
// freq is always minute, hour or day, representing the time interval to get the total number of occurrences for the given tweetName.
// The first time interval always starts from the startTime, so the time intervals are [startTime, startTime + delta*1>,  [startTime + delta*1, startTime + delta*2>, [startTime + delta*2, startTime + delta*3>, ... , [startTime + delta*i, min(startTime + delta*(i+1), endTime + 1)> for some non-negative number i and delta (which depends on freq).

var TweetCounts = function() {
    this.tweets = new Map();
};

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
    if (!this.tweets.has(tweetName)) {
        this.tweets.set(tweetName, []);
    }
    this.tweets.get(tweetName).push(time);
};

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(
    freq,
    tweetName,
    startTime,
    endTime
) {
    const timeArr = this.tweets.get(tweetName);
    if (timeArr === undefined) return [];

    const filtered = timeArr
        .filter(time => time >= startTime && time <= endTime)
        .sort((a, b) => a - b);

    let delimiter = getDelimiter(freq);
    let result = new Array(Math.ceil((endTime - startTime) / delimiter)).fill(
        0
    );
    filtered.forEach(time => {
        const index = Math.floor((time - startTime) / delimiter);
        if (result[index] === undefined) {
            result[index] = 1;
        } else {
            result[index] += 1;
        }
    });

    return result;
};

function getDelimiter(freq) {
    switch (freq) {
        case 'minute':
            return 60;
        case 'hour':
            return 3600;
        case 'day':
            return 86400;
    }
}

const tweetCounts = new TweetCounts();
tweetCounts.recordTweet('tweet3', 0);
tweetCounts.recordTweet('tweet3', 60);
tweetCounts.recordTweet('tweet3', 10); // All tweets correspond to "tweet3" with recorded times at 0, 10 and 60.
tweetCounts.getTweetCountsPerFrequency('minute', 'tweet3', 0, 59); // return [2]. The frequency is per minute (60 seconds), so there is one interval of time: 1) [0, 60> - > 2 tweets.
tweetCounts.getTweetCountsPerFrequency('minute', 'tweet3', 0, 60); // return [2, 1]. The frequency is per minute (60 seconds), so there are two intervals of time: 1) [0, 60> - > 2 tweets, and 2) [60,61> - > 1 tweet.
tweetCounts.recordTweet('tweet3', 120); // All tweets correspond to "tweet3" with recorded times at 0, 10, 60 and 120.
tweetCounts.getTweetCountsPerFrequency('hour', 'tweet3', 0, 210); // return [4]. The frequency is per hour (3600 seconds), so there is one interval of time: 1) [0, 211> - > 4 tweets.

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName, time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq, tweetName, startTime, endTime)
 */
