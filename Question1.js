function Closure(num) {
  return function (n) {
    return n + num;
  };
}
const addNumber = Closure(5);
console.log(addNumber(10)); // output: 15
console.log(addNumber(20)); // output: 25
console.log(addNumber(30)); // output: 35
