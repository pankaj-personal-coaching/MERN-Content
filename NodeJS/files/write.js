const fs = require("fs");

const content = `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only five
centuries, but also the leap into electronic typesetting, remaining
essentially unchanged. It was popularised in the 1960s with the release
of Letraset sheets containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions
of Lorem Ipsum.`;

// Asynchronous
// fs.writeFile("newFile.txt", content, (error) => {
//   if (error) {
//     return new Error("We are getting error while writing to the file!");
//   }
// });

// // Synchronous
// fs.writeFileSync("test.txt", content, () => {
//   if (error) {
//     return new Error("We are getting error while writing to the file!");
//   }
// });

// let newContent = `This is new Data which can be added or appended to the existing file data.`;

// fs.appendFile("newFile.txt", newContent, (error) => {
//   if (error) {
//     return new Error("We are getting error while appending data to the file!");
//   }
// });

// fs.renameSync("fileData.txtx", "fileData.txt");
