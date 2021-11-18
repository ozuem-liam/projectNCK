const { Account } = require('../database/models/Account'),
  messages = require('../translation/message.json'),
  config = require('../configs/config'),
  { jwtTokens } = require("../utils/jwt-helpers")
  EMAIL_CONFIRM = 'EmailConfirmation',
  PASSWORD_RESET = 'PasswordReset';

const loginUser = async ({ email, password }) => {
  const account = await Account.findOne({ email });
  if (account) {
    if (await account.isAMatchPassword(password)) {
      // sign a token
      const id = account._id;
      const { accessToken } = jwtTokens(id);
      let destination = 'dashboard',
        message = messages['ACT-LOGIN-SUCCESS'],
        isSuccess = true;
      account.last_login = Date.now();
      account.save();
      return { isSuccess, account, destination, message, accessToken };
    } else {
      let message = messages['ACT-INVALID-LOGIN'];
      return { isSuccess: false, message };
    }
  }
  message = messages['USER-NOT-FOUND'];
  return { isSuccess: false, message };
};

const createAccount = async ({
  email,
  password,
  membership_type,
  phone_number,
  first_name,
  last_name,
  stage,
}) => {
  try {
    let message = '';
    if (stage === 1) {
      exist = await Account.exists({ email });
      if (exist) {
        const message = messages['ACT-EMAIL-EXIST'];
        return { isSuccess: false, message };
      }
        const hashPassword = await Account.hashPassword(password);
        const account = await new Account({
          email,
          first_name,
          last_name,
          membership_type,
          phone_number,
          password: hashPassword,
        }).save();
        return { 
          isSuccess: true, 
          message, 
          destination: "dashboard",
          account: formatAccountResponse(account)
        };
   };
  } catch (error) {
    return { isSuccess: false, message: error };
  }
};

const formatAccountResponse = (account) => {
  const {
    id,
    email,
    first_name,
    last_name,
    membership_type,
    phone_number,
  } = account;

  return {
    id,
    email,
    first_name,
    last_name,
    membership_type,
    phone_number,
  };
};

module.exports = { loginUser, createAccount };
