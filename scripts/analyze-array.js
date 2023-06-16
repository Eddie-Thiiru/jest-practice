const findAverage = (arr) => {
  let count = arr.length;

  let sum = arr.reduce((pre, cur) => {
    return pre + cur;
  });

  return Math.round(sum / count);
};

const findMin = (arr) => {
  let copy = arr.slice();

  while (copy.length > 1) {
    let a = copy.shift();
    let b = copy.shift();

    if (a !== null && b !== null) {
      if (a < b) {
        copy.unshift(a);
      } else if (a > b) {
        copy.unshift(b);
      } else {
        copy.unshift(a);
      }
    }
  }

  return copy[0];
};

const findMax = (arr) => {
  let copy = arr.slice();

  while (copy.length > 1) {
    let a = copy.shift();
    let b = copy.shift();

    if (a !== null && b !== null) {
      if (a > b) {
        copy.unshift(a);
      } else if (a < b) {
        copy.unshift(b);
      } else {
        copy.unshift(a);
      }
    }
  }

  return copy[0];
};

const findLength = (arr) => {
  return arr.length;
};

const analyzeArray = (arr) => {
  const average = findAverage(arr);
  const min = findMin(arr);
  const max = findMax(arr);
  const length = findLength(arr);

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
};

module.exports = analyzeArray;
