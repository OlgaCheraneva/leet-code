/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    // Sort events list by start time
    events.sort((a, b) => b[0] - a[0]);

    // Add colliding values to the queue
    // The queue is sorted by end time desc
    const priorityQueue = [events.pop()];
    let day = priorityQueue[0][0];
    let count = 0;

    while (events.length > 0 || priorityQueue.length > 0) {
        while (events.length > 0 && events[events.length - 1][0] === day) {
            priorityQueue.push(events.pop());
        }
        priorityQueue.sort((a, b) => b[1] - a[1]);

        // Discard no longer eligible events + 1 (the one we're attending now)
        while (
            priorityQueue.length > 0 &&
            day > priorityQueue[priorityQueue.length - 1][1]
        ) {
            priorityQueue.pop();
        }
        if (priorityQueue.pop() != null) {
            count += 1;
        }

        // While day += 1 would work, we can do better. We can skip to the start of the next event,
        // either in the Priority Queue or events
        const nextPrioStart =
            priorityQueue.length > 0
                ? priorityQueue[priorityQueue.length - 1][0]
                : Infinity;
        const nextEventStart =
            events.length > 0 ? events[events.length - 1][0] : Infinity;
        day = Math.max(day + 1, Math.min(nextPrioStart, nextEventStart));
    }

    return count;
};
const events = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 2]
];
console.log(maxEvents(events));
