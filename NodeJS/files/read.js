const fs = require("fs");

console.log("We are reading file data.");

// Reading file asynchronously
// fs.readFile("test.txt", (err, data) => {
//   if (err) {
//     return new Error("We are getting error while reading file.");
//   }
//   console.log(data.toString());
// });

// Reading file Synchronously.
try {
  let fileData = fs.readFileSync("test1.txt");
} catch (error) {
  console.log(error.message);
  return new Error("We are getting error while reading file.");
}
console.log(fileData.toString());
console.log("We are done with file reading!");
