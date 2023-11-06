var topKFrequent = function(nums, k) {
    const numsMap = new Map();
    nums.forEach(element => {
        if (numsMap.has(element)) numsMap.set(element,(numsMap.get(element)) + 1);
        else numsMap.set(element,1);
    });

    return Array.from(numsMap.entries())
    .sort((a,b) => b[1] - a[1])
    .slice(0,k)
    .map(v => v[0])
};




console.log(topKFrequent([1,1,1,2,2,3],2));