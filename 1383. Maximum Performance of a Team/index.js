// In a min heap, for any given node C, if P is a parent node of C, then the key (the value)
// of P is less than or equal to the key of C.
// In a heap, the highest (or lowest) priority element is always stored at the root.
// However, a heap is not a sorted structure; it can be regarded as being partially ordered.
// A heap is a useful data structure when it is necessary to repeatedly remove the object with
// the highest (or lowest) priority.
const MinHeap = () => {
    const list = [];
    const parent = (index) => Math.floor((index - 1) / 2);
    const left = (index) => 2 * index + 1;
    const right = (index) => 2 * index + 2;

    const swap = (a, b) => {
        const temp = list[a];
        list[a] = list[b];
        list[b] = temp;
    };
    const insert = (x) => {
        list.push(x);
        let currentIndex = list.length - 1;
        let parentIndex = parent(currentIndex);
        while (list[parentIndex] > list[currentIndex]) {
            swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = parent(parentIndex);
        }
    };
    const sink = (index) => {
        let minIndex = index;
        const leftIndex = left(index);
        const rightIndex = right(index);
        if (list[leftIndex] < list[minIndex]) {
            minIndex = leftIndex;
        }
        if (list[rightIndex] < list[minIndex]) {
            minIndex = rightIndex;
        }
        if (minIndex !== index) {
            swap(minIndex, index);
            sink(minIndex);
        }
    };
    const size = () => list.length;
    const extract = () => {
        swap(0, size() - 1);
        const min = list.pop();
        sink(0);
        return min;
    };
    return {
        insert,
        size,
        extract
    };
};

/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    const workers = [];
    for (let i = 0; i < n; i++) {
        workers.push({number: i, speed: speed[i], efficiency: efficiency[i]});
    }
    workers.sort(
        (firstWorker, secondWorker) =>
            secondWorker.efficiency - firstWorker.efficiency
    );
    const speeds = MinHeap();
    let speedSum = 0;
    let performance = 0;
    workers.forEach((worker) => {
        speedSum += worker.speed;
        speeds.insert(worker.speed);
        if (speeds.size() > k) {
            const minSpeed = speeds.extract();
            speedSum -= minSpeed;
        }
        performance = Math.max(performance, speedSum * worker.efficiency);
    });

    return performance % 1000000007;
};
