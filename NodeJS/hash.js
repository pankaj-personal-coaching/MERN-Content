// Loading the crypto module in node js
const crypto = require("crypto");

// Creating a hash object
const md5Hash = crypto.createHash("md5"); // We can use differnt hash algo. e.g. md5/sha1/ripemd160

// Passing the data to be hashed.
const hashedData = md5Hash.update("Pankaj Shimpi", "utf-8");

// Creating a hash in the required format.
const genHash = hashedData.digest("hex");

// Printing the output.
console.log(`MD5 Hash: => ${genHash}`);

// --------------------------End of MD5---------------------------------
// SHA1 algo.
const sha1Hash = crypto.createHash("sha1");

const data = sha1Hash.update("Pankaj Shimpi", "utf-8");

const genSha1Hash = data.digest("hex");

console.log(`SHA1 Hash => ${genSha1Hash}`);

const sha512Hash = crypto.createHash("sha512");

const sha512Data = sha512Hash.update("Pankaj Shimpi", "utf-8");

const genSha512Hash = sha512Data.digest("hex");

console.log(`SHA512 Hash => ${genSha512Hash}`);

// ---------------------HMAC--------------------------
// We are creating a hmac hash for data and using secret key.
const sha512Hmac = crypto.createHmac("sha512", "yoursecretkey");

const hmacData = sha512Hmac.update("Pankaj Shimpi");

const genHmac = hmacData.digest("hex");

console.log(`HMAC SHA512 Hash: => ${genHmac}`);
