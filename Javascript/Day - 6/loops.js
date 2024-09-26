// for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// 1st iteration i = 1, condition is i <= 10 which is true then
// it will go inside the loop and logs the value
// 2nd iteration i = 2, condition is i <= 10 which is true then
// it will go inside the loop and logs the value
//.
//.
//.
// 10th iteration i = 10, condition is i <= 10 which is true then
// it will go inside the loop and logs the value
// 11th iteration i = 11, condition is i <= 10 which is now false then
// it will not go inside the loop.

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// break and continue
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     //break  || continue;
//   }
//   console.log(i);
// }

// function table(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${i * num}`);
//   }
// }
// table(5);
// table(961);

// while loop:
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// function table(num) {
//   let i = 1;
//   while (i <= 10) {
//     console.log(`${num} * ${i} = ${i * num}`);
//     i++;
//   }
// }
// table(5);
// table(961);

// do while
// do {
//   console.log("Code is executed even the condition is false");
// } while (false);

// for of loop(Arrays and strings)
// let nums = [12, 13, 15, 100, true, "Pankaj", undefined, null];
// for (let number of nums) {
//   console.log(number);
// }

// let str = "Javascript";
// for (let char of str) {
//   console.log(char);
// }

// for in loop(Objects)
// let user = {
//   name: "Pankaj",
//   id: 1234,
//   address: "Pune",
//   age: 31,
//   company: "LTIMindtree",
// };
// let keys = [];
// let values = [];
// for (let property in user) {
//   keys.push(property);
//   values.push(user[property]);
// }

// console.log(keys);
// console.log(values);
// console.log(Object.keys(user));
// console.log(Object.values(user));

// forEach() loop which can be used with arrays.
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((currentNumber, index, list) => {
//   console.log(currentNumber, index, list);
// });
