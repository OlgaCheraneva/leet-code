// Given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.
// You can attend an event i at any day d where startTimei <= d <= endTimei. Notice that you can only attend one event at any time d.
// Return the maximum number of events you can attend.

class PriorityQueue {
    constructor() {
        this.array = [];
    }

    // Retrieves and removes the head of this queue, or returns null if this queue is empty.
    poll() {
        if (this.isEmpty()) return null;
        return this.array.pop();
    }

    // Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
    peek() {
        if (this.isEmpty()) return null;
        return this.array[this.array.length - 1];
    }

    add(item) {
        let contains = false;
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] <= item) {
                this.array.splice(i, 0, item);
                contains = true;
                break;
            }
        }

        if (!contains) {
            this.array.push(item);
        }
    }

    size() {
        return this.array.length;
    }

    isEmpty() {
        return this.array.length === 0;
    }
}

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    const sorted = [...events].sort((a, b) => a[0] - b[0]);
    const eventCount = events.length;
    // Keeps event's end days
    // The earlier the day, the grater the priority
    const pq = new PriorityQueue();
    let i = 0;
    let res = 0;
    for (let d = 1; d < 100000; d++) {
        // Clean the queue. Remove if the event is closed
        while (!pq.isEmpty() && pq.peek() < d) {
            pq.poll();
        }
        // Add events that starts today
        while (i < eventCount && sorted[i][0] === d) {
            pq.add(sorted[i++][1]);
        }
        // Greedily visit an event that will end earlier than the rest
        if (!pq.isEmpty()) {
            pq.poll();
            res++;
        }
    }

    return res;
};

const events = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 2]
];
console.log(maxEvents(events));
