// 1. Write a code which can give grades to students according to theirs scores:
//     80-100, A
//     70-89, B
//     60-69, C
//     50-59, D
//     0-49, F

// const checkGrades = (score) => {
//   switch (true) {
//     case score >= 80 && score <= 100:
//       return "A";
//     case score >= 70 && score <= 89:
//       return "B";
//     case score >= 60 && score <= 69:
//       return "C";
//     case score >= 50 && score <= 59:
//       return "D";
//     case score >= 0 && score <= 49:
//       return "F";
//     default:
//       return "Please enter valid score!";
//   }
// if (score > 100 || score < 0) {
//   return "Please enter valid score!";
// }
// if (score >= 80 && score <= 100) {
//   return "A";
// } else if (score >= 70 && score <= 89) {
//   return "B";
// } else if (score >= 60 && score <= 69) {
//   return "C";
// } else if (score >= 50 && score <= 59) {
//   return "D";
// } else {
//   return "F";
// }
// };

// console.log(checkGrades(56));
// console.log(checkGrades(89));
// console.log(checkGrades(66));
// console.log(checkGrades(36));
// console.log(checkGrades(26));
// console.log(checkGrades(68));
// console.log(checkGrades(-156));
// console.log(checkGrades(156));

// 2. Check if a day is weekend day or a working day. Your script will take day as an input.
//   e.g. What is the day today? Saturday
//   Saturday is a weekend.

// const checkDay = (day) => {
//   switch (day.toLowerCase()) {
//     case "sunday":
//       return `${day} is a weekend.`;
//     case "monday":
//       return `${day} is a weekday.`;
//     case "tuesday":
//       return `${day} is a weekday.`;
//     case "wednesday":
//       return `${day} is a weekday.`;
//     case "thursday":
//       return `${day} is a weekday.`;
//     case "friday":
//       return `${day} is a weekday.`;
//     case "saturday":
//       return `${day} is a weekend.`;
//     default:
//       return "Please enter valid day!";
//   }
// };

// console.log(checkDay("SaturDay")); // weekend
// console.log(checkDay("sunday")); // weekend
// console.log(checkDay("MONDAY")); // weekday

// 3.
// i. Count logged in users,
// ii. Count users having greater than equal to 50 points from the following object.
// iii. Find people who are MERN stack developer from the users object
// iv. Set your name in the users object without modifying the original users object
// v. Get all keys or properties of users object
// vi. Get all the values of users object
// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "Brook@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Python",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 78,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// i. Count logged in users,
// const checkLoggedInUsers = (users = {}) => {
//   let isLoggedInCount = 0;
//   for (let key in users) {
//     if (users[key].isLoggedIn) {
//       isLoggedInCount++;
//     }
//   }
//   // Object.values(users).forEach((user) => {
//   //   if (user.isLoggedIn) {
//   //     isLoggedInCount++;
//   //   }
//   // });
//   // return Object.values(users).filter((user) => user.isLoggedIn).length;
//   return isLoggedInCount;
// };

// console.log(checkLoggedInUsers(users));
// console.log(checkLoggedInUsers());

// ii. Count users having greater than equal to 50 points from the following object.
// const checkPointsGreaterThan50 = (users = {}) => {
//   let userName = [];
//   for (let key in users) {
//     if (users[key].points >= 50) {
//       userName.push(key);
//     }
//   }
//   return userName;
// };

// console.log(checkPointsGreaterThan50(users));

// iii. Find people who are MERN stack developer from the users object

// const checkMERNDevelopers = (users = {}) => {
//   let userName = [];
//   // "MongoDB", "Express", "React", "Node",
//   for (let key in users) {
//     if (
//       users[key].skills.includes("MongoDB") &&
//       users[key].skills.includes("Express") &&
//       users[key].skills.includes("React") &&
//       users[key].skills.includes("Node")
//     ) {
//       userName.push(key);
//     }
//   }
//   return userName;
// };

// console.log(checkMERNDevelopers(users));

// iv. Set your name in the users object without modifying the original users object
// const addUser = (user, users) => {
//   let temp = {};
//   for (let key in users) {
//     temp[key] = users[key];
//   }
//   temp[user.name] = user;
//   return temp;
// };

// let pankaj = {
//   name: "Pankaj",
//   email: "pan@kaj.com",
//   skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
//   age: 31,
//   isLoggedIn: true,
//   points: 68,
// };
// console.log(addUser(pankaj, users)); // WE should see pankaj added in users
// console.log(
//   "\n\n********************************Second object********************************"
// );
// console.log(users); // WE should not see pankaj added in users

// v. Get all keys or properties of users object
// vi. Get all the values of users object

// const getKeysAndValues = (obj = {}) => {
//   let keys = [];
//   let values = [];
//   for (let key in obj) {
//     keys.push(key);
//     values.push(obj[key]);
//   }
//   return { keys, values };
// };

// console.log(getKeysAndValues(users));

// let products = [
//   {
//     _id: "eedfcf",
//     name: "mobile phone",
//     description: "Huawei Honor",
//     price: 200,
//     ratings: [
//       { userId: "fg12cy", rate: 5 },
//       { userId: "zwf8md", rate: 4.5 },
//     ],
//     likes: [],
//   },
//   {
//     _id: "aegfal",
//     name: "Laptop",
//     description: "MacPro: System Darwin",
//     price: 2500,
//     ratings: [],
//     likes: ["fg12cy"],
//   },
//   {
//     _id: "hedfcg",
//     name: "TV",
//     description: "Smart TV:Procaster",
//     price: 400,
//     ratings: [{ userId: "fg12cy", rate: 5 }],
//     likes: ["fg12cy"],
//   },
// ];

// a. Create a function called rateProduct which rates the product
// b. Create a function called averageRating which calculate the
//        average rating of a product

// const rateProduct = (id, rating) => {
//   products = products.map((product) => {
//     if (product._id === id) {
//       product.ratings.push(rating);
//     }
//     return product;
//   });
// };

// rateProduct("aegfal", { userId: "fg12cyesdf", rate: 5 });
// rateProduct("aegfal", { userId: "fg12cyesdf", rate: 4 });
// rateProduct("aegfal", { userId: "fg12cyesdf", rate: 4.5 });
// rateProduct("aegfal", { userId: "fg12cyesdf", rate: 3 });
// rateProduct("aegfal", { userId: "fg12cyesdf", rate: 4.8 });
// // console.log(JSON.stringify(products));

// const getAvg = (arr = []) => {
//   let total = 0;
//   for (let obj of arr) {
//     total = total + obj.rate;
//   }
//   return total / arr.length;
// };

// const averageRating = () => {
//   products = products.map((product) => {
//     product.avgRating = getAvg(product.ratings);
//     return product;
//   });
// };
// averageRating();
// console.log(JSON.stringify(products));

// Given a string, write a function to count the occurrences of each character
// in the string.
//     countChars(str);
//     countChars("abbcccdeeffffff"):
//     {
//       a: 1,
//       b: 2,
//       c: 3,
//       d: 1,
//       e: 2,
//       f: 6
//     }
//  solution:
//  1. use loop
//  2. check if current char is present in the string or not. we can use map(es6) here
const countChars = (input) => {
  // let map = new Map();
  // for (let char of input) {
  //   if (map.has(char)) {
  //     map.set(char, map.get(char) + 1);
  //   } else {
  //     map.set(char, 1);
  //   }
  // }
  // return map;
  let output = {};
  for (let char of input) {
    if (output[char]) {
      output[char] = output[char] + 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
};
console.log(countChars("abbcccdeeffffff"));
// 1st iteration: if(output.a) and it is false so it goes to else block
// output = {a: 1}
// 2nd iteration output = {a: 1, b: 1}
// 3rd iteration if(output.b) and it is true so it goes inside the if block
// output = {a: 1, b: 2}

let user = {
  name: "Pankaj",
  address: {
    city: "Pune",
  },
};
user.name
user.address.city

