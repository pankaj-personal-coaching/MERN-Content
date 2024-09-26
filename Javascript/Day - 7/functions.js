// Declaration Functions:
// function sum() {
//   let num1 = 10;
//   let num2 = 20;
//   console.log(num1 + num2);
// }
// sum();

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }
// sum(10, 50);

// function sum(n1, n2) {
//   return n1 + n2;
// }
// let result = sum(20, 30);
// console.log(result);

// console.log(sum(10, 20));
// console.log(sum(10, 20, 30));
// console.log(sum(10, 20, 30, 40));
// function sum() {
//   // console.log(arguments);
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result = result + arguments[i];
//   }
//   return result;
// }

// Expression functions
// var sum = function () {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result = result + arguments[i];
//   }
//   return result;
// };
// console.log(sum(10, 20));
// console.log(sum(10, 20, 30));
// console.log(sum(10, 20, 30, 40));

// Anonymous Function or IIFE's or self executed functions
// (function (n1, n2) {
//   console.log(n1 + n2);
// })(1, 2);

// Arrow Fucntions:
// const sum = (n1, n2) => {
//   console.log(n1 + n2);
// };
// sum(10,20);
// const sum = (n1, n2) => {
//   return n1 + n2;
// };
// const sum = (n1, n2) => n1 + n2;
// console.log(sum(30, 20));

// const sum = (...param) => {
//   // console.log(arguments);
//   let result = 0;
//   for (let i = 0; i < param.length; i++) {
//     result = result + param[i];
//   }
//   return result;
// };
// console.log(sum(10, 20));
// console.log(sum(10, 20, 30));
// console.log(sum(10, 20, 30, 40));

// Default parameter
// const sum = (a = 10, b = 20, c = 30) => {
//   return a + b + c;
// };
// console.log(sum()); // 10+20+30 = 60
// console.log(sum(1)); // 1+20+30 = 51
// console.log(sum(1, 2)); // 1+2+30 = 33
// console.log(sum(1, 2, 3)); // 1+2+3=6

//  Highter order functions or callback functions.

// const sum = (n1, n2) => n1 + n2;

// const addNums = (num1, num2, cb) => {
//   return cb(num1, num2);
// };

// console.log(addNums(10, 20, sum));

// function sayHello(name, cb) {
//   console.log("Hello " + name);
//   cb(name);
// }

// function sayGoodby(name) {
//   console.log("Goodby!" + name);
// }

// sayHello("Pankaj", sayGoodby);

// Use callback to handle asynchronous stuff.
// function fetchData(cb) {
//   setTimeout(() => {
//     let data = "Data Fetched!";
//     console.log(data + "From API");
//     cb(data);
//   }, 2000);
// }

// function processData(data) {
//   console.log(data + "from function");
// }

// fetchData(processData);

//sum(10, 20, 30);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d;
//       };
//     };
//   };
// }

// const sum = (a) => {
//   return (b) => {
//     return (c) => {
//       return (d) => {
//         return a + b + c + d;
//       };
//     };
//   };
// };

// const sum = (a) => (b) => (c) => (d) => a + b + c + d;
// console.log(sum(10)(20)(30)(40));

// Setting time functions:
// console.log("Start");
// setTimeout(function () {
//   console.log("This log will print after 2 seconds");
// }, 2000);
// console.log("Start");
// let interval = setInterval(function () {
//   console.log("This log will print after 2 seconds");
// }, 2000);

// setTimeout(() => {
//   clearInterval(interval);
//   console.log("Stop");
// }, 10000);
