// If
// let num = 100;
// if (num === 100) {
//   console.log("The number is 100");
// }

// let isFanOn = true;
// if (isFanOn) {
//   console.log("The fan is on!");
// }

// if-else
// let gender = "female";
// if (gender === "male") {
//   console.log("The Person is Male");
// } else {
//   console.log("The Person is Female");
// }

// To check if number is positive, negative, zero not valid number
// if-else if-else
// function checkNum(number) {
//   if (number === 0) {
//     console.log("The number is zero!");
//   } else if (number > 0) {
//     console.log("The number is positive!");
//   } else if (number < 0) {
//     console.log("The number is negative!");
//   } else {
//     console.log("Not a valid number!");
//   }
// }

// function checkNum(number) {
//   switch (true) {
//     case number === 0:
//       console.log("The number is zero!");
//       break;
//     case number > 0:
//       console.log("The number is positive!");
//       break;
//     case number < 0:
//       console.log("The number is negative!");
//       break;
//     default:
//       console.log("The number is not valid!");
//       break;
//   }
// }
// checkNum(0); // zero
// checkNum(10); // Positive
// checkNum(-10); // Negative
// checkNum(); // Not a valid number

// function getNumberOfDaysOfMonth(month) {
//   switch (month) {
//     case "Jan":
//       return 31;
//     case "Feb":
//       return 28;
//     case "Mar":
//       return 31;
//     case "Apr":
//       return 30;
//     case "May":
//       return 31;
//     case "June":
//       return 30;
//     case "July":
//       return 31;
//     case "Aug":
//       return 31;
//     case "Sep":
//       return 30;
//     case "Oct":
//       return 31;
//     case "Nov":
//       return 30;
//     case "Dec":
//       return 31;
//     default:
//       return null;
//   }
// }

// console.log(getNumberOfDaysOfMonth("Jan"));
// console.log(getNumberOfDaysOfMonth("Oct"));
// console.log(getNumberOfDaysOfMonth("Sep"));

// Ternary:
// let gender = "male";
// gender === "male"
//   ? console.log("The Person is Male!")
//   : console.log("The Person is Female!");


