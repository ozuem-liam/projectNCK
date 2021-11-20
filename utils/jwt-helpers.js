const jwt = require('jsonwebtoken');

 const accessSecret = process.env.SECRET;

function jwtTokens(id) {
  const account = { id };
  const accessToken = jwt.sign(account, accessSecret, {
    expiresIn: 3 * 86400,
  });
  return { accessToken };
}

module.exports = { jwtTokens }
