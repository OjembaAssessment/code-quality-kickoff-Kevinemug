const findRecusiveSum = arr => {
    if (arr.length === 0) return 0;
    return arr[0] + findRecusiveSum(arr.slice(1));    
}
