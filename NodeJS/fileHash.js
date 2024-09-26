const crypto = require("crypto");
const fs = require("fs");

// Algorithm(HMAC)
const hmac = crypto.createHmac("md5", "kuchbhi");

// Reading file Content
fs.readFileSync("Rohit_Gurunath_Sharma_small.jpg", (data) => {
  hmac.update(data);
});

// Creating the hmac in the required format and writing it to the another file.
const genHmac = hmac.digest("hex");
console.log(`HMAC hash generated using md5 is => ${genHmac}`);
fs.writeFileSync("output123.txt", genHmac);
