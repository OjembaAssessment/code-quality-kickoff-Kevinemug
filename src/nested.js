const getNestingLevel = (arr, beginLevel = 0) => {
  if (!Array.isArray(arr)) return beginLevel;

  let endLevel = beginLevel;
  for (let item of arr) {
    endLevel = Math.max(endLevel, getNestingLevel(item, beginLevel + 1));
  }
  return endLevel;
};

const flattenArray = (arr) => {
  return arr.flat(Infinity);
};

