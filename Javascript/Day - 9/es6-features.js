// Let and const.
// Scoping(Blocked Scope)
// if (true) {
//   let num = 10;
//   const num1 = 20;
//   console.log(num);
//   console.log(num1);
//   num = "Pankaj";
//   console.log(num);
//   console.log(num1);
// }

// Arrow functions:
// const add = (a, b) => a + b;
// console.log(add(10, 20));

// function Person() {
//   this.age = 0;
//   setInterval(() => {
//     this.age++;
//     console.log(this.age);
//   }, 2000);
// }

// const p = new Person();

// Default Parameter
// const greet = (name = "Pankaj") => {
//   return `Hello, ${name}`;
// };

// console.log(greet("Rohit"));
// console.log(greet());

// Rest Operator:
// const sum = (a, b, ...rest) => {
//   // let sum = a + b;
//   // for (let num of rest) {
//   //   sum = sum + num;
//   // }
//   // return sum;
//   // console.log(rest);
//   return rest.reduce((acc, num) => {
//     return acc + num;
//   }, a + b);
//   //return a + b + c;
// };
// console.log(sum(10, 20));
// console.log(sum(10, 20, 30));
// console.log(sum(10, 20, 30, 40));
// console.log(sum(10, 20, 30, 40, 50));
// console.log(sum(10, 20, 30, 40, 50, 60));
// console.log(sum(10, 20, 30, 40, 50, 60, 70));

// Spread Operator
// let spread = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let spread1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let concat = [...spread, ...spread1];
// console.log(concat);
// console.log(numsCopy);

// let user = {
//   name: "Pankaj",
//   id: 12345,
//   address: "Pune",
//   email: "p@s.com",
// };

// let user1 = user;
// user1.company = "LTI"
// console.log(user);
// console.log(user1);

// let user1 = { ...user, phone: 9876543210, company: "LTIMindtree" };
// console.log(user);
// console.log(user1);

// Template literals or String interpolation:
// let name = "Pankaj";
// let greeting = `Hello ${name}`;
// console.log(greeting);

// let multiLineString = "This is \n" +
// "a Multi Line \n"+
// "String \n"+
// "that can be \n" +
// "used as example";
// console.log(multiLineString);

// let multiLineString = `This is
// a Multi Line
// String
// that can be
// used as example`;
// console.log(multiLineString);

// Destructuring:
// let nums = [1, 2, 3, 4, 5];
// // console.log(nums[0]);
// // console.log(nums[1]);
// // console.log(nums[2]);
// // console.log(nums[3]);
// // console.log(nums[4]);
// let [n1, , , , n5] = nums;
// console.log(n1, n5);
// let a = 10;
// let b = 20;
// console.log(a, b);
// [b, a] = [a, b];
// console.log(a, b);

// let user = {
//   name: "Pankaj",
//   id: 1234,
//   emali: "p@s.com",
//   phone: 1234567890,
//   address: {
//     city: "Pune",
//     pincode: 412101,
//   },
// };

// // let { name, id, address } = user;
// // const { city } = address;
// let {
//   name,
//   id,
//   address: { city },
// } = user;
// console.log(name, id, city);

// Modules(Import/Export)
// Code written under modules->math.js and modules->math-operations.js

// Promises:

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     // Assume this setTimeout is nothing but an API call which will
//     // return "Success!" after 2 seconds
//     setTimeout(() => {
//       // resolve("Success!"); // Success Case: If everything goes well.
//       reject("Error!"); // Error case: return error if we find any issue
//     }, 2000);
//   });
// };
// getData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("It gets executed everytime");
//   });

// Set:
// let companies = new Set();
// companies.add("Google");
// companies.add("Facebook");
// companies.add("Microsoft");
// companies.add("Infosys");
// companies.add("TCS");
// companies.add("LTIMindtree");
// console.log(companies);
// console.log(companies.size);
// console.log(companies.has("LTIMindtreE"));
// companies.delete("LTIMindtree");
// console.log(companies);
// companies.clear()
// console.log(companies);
// for (let company of companies) {
//   console.log(company);
// }

// let nums = [1, 2, 4, 5, 6, 3, 4, 5, 1, 7, 8, 9];
// console.log(nums);
// let uniqNums = [...new Set(nums)];
// console.log(uniqNums);

// Map:
const user = new Map();
user.set("name", "Pankaj");
user.set("id", 1234);
user.set("address", "Pune");
user.set("email", "p@s.com");
console.log(user);
console.log(user.size);
console.log(user.get("name"));
console.log(user.has("name"));

// let contries = [
//   ["India", "New Delhi"],
//   ["Australia", "Sydney"],
//   ["England", "London"],
//   ["Sweden", "Stockholm"],
// ];
// const countyMap = new Map(contries);
// console.log(countyMap);
// // for (let [county, capital] of countyMap) {
// //   console.log(county, capital);
// // }

// countyMap.forEach((capital, county) => {
//   console.log(county, capital);
// });
