const faker = require('faker'),
  messages = require('../../translation/message.json');

const password = 'RandomP330hs';

const registrationMockRequest = {
    password,
    id: 'dummyid',
    email: faker.internet.email(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    confirm_password: password,
    membership_type: 'Customer',
    stage: 1,
  },
  loginMockRequest = {
    email: faker.internet.email(),
    password: password,
  },
  createAccountStage2Response = {
    account: registrationMockRequest,
    isSuccess: true,
    destination: 'dashboard',
    message: messages['ACT-LOGIN-SUCCESS'],
  };
module.exports = { loginMockRequest, registrationMockRequest, createAccountStage2Response };
