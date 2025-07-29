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
const fib = recurFib(7);
console.log(fib);
