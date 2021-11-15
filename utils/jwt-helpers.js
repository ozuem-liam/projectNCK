const jwt = require('jsonwebtoken');

 const accessSecret = process.env.SECRET;

function jwtTokens({ id }) {
  const customer = { id };
  const accessToken = jwt.sign(customer, accessSecret, {
    expiresIn: 3 * 86400,
  });
  return { accessToken };
}

module.exports = {accessSecret, jwtTokens}
