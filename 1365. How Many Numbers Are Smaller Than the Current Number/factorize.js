const factorizeNum = function(num) {
    const res = [1];

    let current = num;
    for (let i = 2; i <= num; i++) {
        if (current === 1) break;
        while (current % i === 0) {
            res.push(i);
            current /= i;
        }
    }

    return res;
};

console.log(factorizeNum(1000).join(' ')); // 2 2 2 5 5 5
