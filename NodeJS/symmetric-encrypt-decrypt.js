const crypto = require("crypto");
const algo = "aes-192-cbc";
const password = "Password used to generate key";

// We use createCipher method from crypto to encrypt the data.
const encrypt = (data) => {
  return new Promise((res, rej) => {
    // First, we will generate the key, the key length is dependent  on the algorithm.
    // In this case for aes-192-cbc, it is 24bytes(i92 bits)
    crypto.scrypt(password, "salt", 24, (err, key) => {
      if (err) rej(err);
      crypto.randomFill(new Uint8Array(16), (err, iv) => {
        if (err) rej(err);
        const cipher = crypto.createCipheriv(algo, key, iv);
        let encryptedData = cipher.update(data, "utf-8", "hex");
        encryptedData += cipher.final("hex");
        res(encryptedData);
      });
    });
  });
};

const decrypt = (encryptedData) => {
  const key = crypto.scryptSync(password, "salt", 24);
  const iv = Buffer.alloc(16, 0);
  const decipher = crypto.createDecipheriv(algo, key, iv);
  let decrypted = "";
  decipher.on("readable", () => {
    let chunk;
    while (null !== (chunk = decipher.read())) {
      decrypted += chunk.toString("utf-8");
    }
  });
  decipher.on("end", () => {
    console.log(`Decrepted Tex: ${decrypted}`);
  });
  decipher.write(encryptedData, "hex");
  decipher.end();
};

const text = "some plain text data";
encrypt(text)
  .then((encrypted) => {
    console.log(
      "-------------------------------------------------------------------------"
    );
    console.log(`Text: ${text}`);
    console.log(`Encrypted Text: ${encrypted}`);
    return encrypted;
  })
  .then((encryptedData) => {
    // We use createDecipher method from crypto to decrypt the data.
    decrypt(encryptedData);
  });
