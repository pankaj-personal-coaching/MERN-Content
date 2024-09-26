const fs = require("fs");
fs.unlink("delete-test.txt", (err) => {
  if (err) {
    console.log(err.message);
  }
});
