const calculateAverage = arr => {
    if(arr.length === 0) return 0;
   return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}