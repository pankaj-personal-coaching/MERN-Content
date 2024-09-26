// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i], i, nums);
// }
// forEach
// nums.forEach((currentItem, index, list) => {
//   console.log(currentItem, index, list);
// });

// map
// let mapRes = nums.map((currentItem, index, list) => {
//   // console.log(currentItem, index, list);
//   return currentItem * currentItem;
// });

// console.log(mapRes);
let users = [
  {
    id: 1,
    first_name: "Ginger",
    last_name: "Melby",
    email: "gmelby0@icq.com",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Madelina",
    last_name: "Ferriman",
    email: "mferriman1@skyrock.com",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Johnathan",
    last_name: "Ivakhin",
    email: "jivakhin2@foxnews.com",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Adrea",
    last_name: "Sines",
    email: "asines3@weather.com",
    gender: "Female",
  },
  {
    id: 5,
    first_name: "Ardisj",
    last_name: "Stonhewer",
    email: "astonhewer4@gnu.org",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "Jabez",
    last_name: "Downer",
    email: "jdowner5@usnews.com",
    gender: "Male",
  },
  {
    id: 7,
    first_name: "Culver",
    last_name: "Tyndall",
    email: "ctyndall6@rediff.com",
    gender: "Male",
  },
  {
    id: 8,
    first_name: "Niles",
    last_name: "Rainy",
    email: "nrainy7@squidoo.com",
    gender: "Male",
  },
  {
    id: 9,
    first_name: "Marlowe",
    last_name: "Schwartz",
    email: "mschwartz8@google.de",
    gender: "Male",
  },
  {
    id: 10,
    first_name: "Rhona",
    last_name: "Huzzey",
    email: "rhuzzey9@toplist.cz",
    gender: "Female",
  },
];

// let userNames = users.map((user) => {
//   return user.first_name;
// });
// console.log(userNames);

// let addCompany = users.map((user) => {
//   user.company = "Infosys";
//   return user;
// });
// console.log(addCompany);

// filter
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // o/p of filter [2,4,6,8,10]
// // o/p of map [false,true,false,true,false,true,false,true,false,true]
// let filterRes = nums.filter((num) => {
//   return num % 2 === 0;
// });

// let mapRes = nums.map((num) => {
//   return num % 2 === 0;
// });
// console.log(filterRes);
// console.log(mapRes);

// let filterUser = users.filter((user) => user.email === "jivakhin2@foxnews.com");
// console.log(filterUser);

// reduce
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = nums.reduce((acc, num) => {
//   console.log(acc, num);
//   return acc + num;
// }, 0);
// console.log(sum); //55
// In the 2st iteration: acc = 0, num = 1, So it returns = 1
// In the 2st iteration: acc = 1, num = 2, So it returns = 3
// In the 2st iteration: acc = 3, num = 3, So it returns = 6
// In the 2st iteration: acc = 6, num = 4, So it returns = 10
// In the 2st iteration: acc = 10, num = 5, So it returns = 15
// In the 2st iteration: acc = 15, num = 6, So it returns = 21
// In the 2st iteration: acc = 21, num = 7, So it returns = 28
// In the 2st iteration: acc = 28, num = 8, So it returns = 36
// In the 2st iteration: acc = 36, num = 9, So it returns = 45
// In the 2st iteration: acc = 45, num = 10, So it returns = 55

// let userNames = users.reduce((acc, user) => {
//   return acc + ": " + user.first_name;
// }, "");

// console.log(userNames);

// find
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 6, 6];
// let findNum = nums.find((num) => {
//   return num === 6;
// });
// let filterNum = nums.filter((num) => {
//   return num === 6;
// });
// console.log(findNum);
// console.log(filterNum);
// let nums = [8, 2, 10, 4, 6, 1];
// let checkOddNumInArray = nums.some((num) => {
//   return num % 2 !== 0;
// });
// console.log(checkOddNumInArray);

// let checkCompayPresentForUsers = users.some((user) => {
//   return user.company;
// });
// console.log(checkCompayPresentForUsers);

// let nums = [8, 2, 10, 4, 6];
// let checkAllNumsAreEven = nums.every((num) => {
//   return num % 2 === 0;
// });
// console.log(checkAllNumsAreEven);
// let nums = [8, 1, 2, 5, 20, 110, 10, 9, 4, 7, 6];
// let sortedNums = nums.sort((a, b) => {
//   return a < b ? 1 : -1;
// });
// console.log(sortedNums);
let techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "Redux",
  "MongoDB",
  "Express",
  "React",
  "Node",
];
// console.log(techs.sort());

console.log(techs.includes("JavaScript")); // true
console.log(techs.includes("Java")); // false
