function fibs(num) {
  const fibList = [0, 1];
  if (num == 0) {
    return [0];
  }
  for (let i = 2; i < num; i++) {
    fibList.push(fibList[i - 2] + fibList[i - 1]);
  }
  console.log(fibList);
  return fibList;
}
// fibs(3);

function recurFib(num) {
  if (num < 2) {
    return num;
  }
  return recurFib(num - 2) + recurFib(num - 1);
}
// const fib = recurFib(7);
// console.log(fib);

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let l = 0,
    r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  // Add remaining elements
  return result.concat(left.slice(l)).concat(right.slice(r));
}

// Example usage:
const unsorted = [3, 2, 1, 13, 8, 5, 0, 1];
const sorted = mergeSort(unsorted);
console.log(sorted); // [0, 1, 1, 2, 3,
