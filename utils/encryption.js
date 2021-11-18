const crypto = require("crypto");

const secret = "secret";
let key = crypto
  .createHash("sha256")
  .update(String(secret))
  .digest("base64")
  .substr(0, 32);

const encrypt = (text) => {
  const ivLength = 16,
    iv = crypto.randomBytes(ivLength),
    cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":tp" + encrypted.toString("hex");
};

module.exports = { encrypt };
