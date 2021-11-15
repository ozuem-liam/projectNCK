const { Account } = require('../database/models/Account'),
  messages = require('../translation/message.json'),
  config = require('../configs/config'),
  { jwtTokens } = require("../utils/jwt-helpers")
  EMAIL_CONFIRM = 'EmailConfirmation',
  PASSWORD_RESET = 'PasswordReset';

const loginUser = async ({ email, password, two_fa_code = '' }) => {
  const account = await Account.findOne({ email });
  if (account) {
    if (await account.isAMatchPassword(password)) {
      // sign a token
      const { accessToken } = jwtTokens(email);
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

// const resetPassword = async ({ email, password, stage, token }) => {
//   const account = await Account.findOne({ email });

//   if (verifyToken({ token, email_token: account.email_token })) {
//     if (stage == 1) {
//       return { isSuccess: true };
//     } else {
//       account.password = await Account.hashPassword(password);
//       account.email_token = { token: 0, createdAt: dayjs().format() };
//       await account.save();
//       //send password reset email
//       const to = [{ email }],
//         dynamic_data = {
//           first_name: account.first_name,
//           last_name: account.last_name,
//         };
//       const { isSuccess } = await sendEmail({
//         to,
//         dynamic_data,
//         template_id: config.sendGrid.templates.PasswordResetSuccess,
//       });
//       const message = messages['ACT-PASSWORD-RESET-SUCCESS'];
//       return { isSuccess };
//     }
//   }

//   return { isSuccess: false, message: messages['WRONG-CONFIRM-CODE'] };
// };

module.exports = { loginUser, createAccount };
