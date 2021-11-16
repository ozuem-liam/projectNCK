/**
 * @apiDefine LoginSuccessResponse
 * @apiName Login
 * @apiSuccessExample {json} Success 
 * 200 OK
{
    "data": {
        "destination": "dashboard"
    },
    "errors": [],
    "message": "account-login-succesfull"
}
 
*/

/**
 * @apiDefine RegisterSuccessResponse
 * @apiName Register
 * @apiSuccessExample {json} Success Stage One
 * 200 OK
{
    "data": {
        "destination": "email-verification",
        "account": {
            "id": "60e156a66d2d039fce8369bd"
        }
    },
    "errors": {},
    "message": "check-email-for-token"
}
 * @apiSuccessExample {json} Success Stage Two
 * 200 OK
{
    "data": {
        "destination": "dashboard",
        "account": {
            "id": "60e15c2e4c6d0caced131000",
            "email": "vstar4all+29aopa888scz3@gmail.com",
            "first_name": "Victor",
            "last_name": "Alade",
            "email_confirm": true,
            "membership_type": [
                "Employee"
            ],
            "phone_confirm": false,
            "phone_number": ""
        }
    },
    "errors": {},
    "message": "account-login-succesfull"
}
 */

/**
 * @apiDefine SendEmailSuccessResponse
 * @apiName Register
 * @apiSuccessExample {json} Success Response
 * 200 OK
{
    "data": {},
    "errors": {},
    "message": "Request successful"
}
 */

/**
 * @apiDefine ResetPasswordSuccessResponse
 * @apiName Reset Password
 * @apiSuccessExample {json} Success Stage One
 * 200 OK
{
    "data": {},
    "errors": {},
    "message": "Request successful"
}
 * @apiSuccessExample {json} Success Stage Two
 * 200 OK
{
    "data": {},
    "errors": {},
    "message": "Password-reset-successful"
}
 */

/**
 * @apiDefine GetProfileByUserIdSuccessResponse
 * @apiName Get Profile By User Id
 * @apiSuccessExample {json} Success Response
 * 200 OK
{
    "data": {
        "phone_number": "",
        "passport_number": "",
        "membership_type": [
            "Employee"
        ],
        "two_fa": false,
        "email_confirm": true,
        "phone_confirm": false,
        "external_id": "",
        "login_attempt": 0,
        "pin": 0,
        "addresses": [],
        "notifications": [],
        "_id": "60e6c4e56f6f904801223796",
        "email": "zodbis+1@gmail.com",
        "first_name": "Sod",
        "last_name": "Musty",
        "__v": 0,
        "last_login": "2021-07-10T14:31:21.730Z"
    },
    "errors": {},
    "message": "Request successful"
}
*/

/**
 * @apiDefine GetProfileByUserEmailSuccessResponse
 * @apiName Get Profile By User Email
 * @apiSuccessExample {json} Success Response
 * 200 OK
{
    "data": {
        "phone_number": "0542347929",
        "passport_number": "A0902211",
        "membership_type": [
            "Employee"
        ],
        "two_fa": false,
        "email_confirm": true,
        "phone_confirm": false,
        "external_id": "",
        "login_attempt": 0,
        "pin": 0,
        "addresses": [],
        "notifications": [],
        "_id": "60b33f8060e3b3596b205a9c",
        "type": [
            "Employee"
        ],
        "email": "zodbis@gmail.com",
        "first_name": "Sodruldeen Temitayo",
        "last_name": "Mustapha",
        "__v": 2,
        "last_login": "2021-06-08T09:41:44.064Z",
        "citizen": "Nigeria",
        "tax_id": null,
        "time_zone": "+05:00"
    },
    "errors": {},
    "message": "Request successful"
}
 */

/**
 * @apiDefine GetAllAccountsWithTypeSuccessResponse
 * @apiName Get All Accounts With Type
 * @apiSuccessExample {json} Success Response
 * 200 OK
{
    "data": [
        {
            "phone_number": "",
            "passport_number": "",
            "membership_type": [
                "Employee"
            ],
            "two_fa": false,
            "email_confirm": false,
            "phone_confirm": false,
            "external_id": "",
            "login_attempt": 0,
            "pin": 0,
            "addresses": [],
            "notifications": [],
            "_id": "60c273ebc83f1b376e2fde51",
            "email": "mustyzod+29@gmail.com",
            "first_name": "Temi",
            "last_name": "Tayo",
            "__v": 0
        },
        {
            "phone_number": "",
            "passport_number": "",
            "membership_type": [
                "Employee"
            ],
            "two_fa": false,
            "email_confirm": false,
            "phone_confirm": false,
            "external_id": "",
            "login_attempt": 0,
            "pin": 0,
            "addresses": [],
            "notifications": [],
            "_id": "60e6c42df3988f468dabae30",
            "email": "zodbis+1232@gmail.com",
            "first_name": "Sod",
            "last_name": "Musty",
            "__v": 0
        },
    ],
    "errors": {},
    "message": "Request successful"
}
 */

/**
 * @apiDefine UpdateUserProfileSuccessResponse
 * @apiName Update User Profile
 * @apiSuccessExample {json} Success Response
 * 200 OK
{
    "data": {
        "phone_number": "07898793929",
        "passport_number": "A05676211",
        "membership_type": [
            "Employee"
        ],
        "two_fa": false,
        "email_confirm": true,
        "phone_confirm": false,
        "external_id": "",
        "login_attempt": 0,
        "pin": 0,
        "addresses": [],
        "notifications": [],
        "_id": "60b33f8060e3b3596b205a9c",
        "type": [
            "Employee"
        ],
        "email": "zodbis@gmail.com",
        "first_name": "Sodruldeen Temitayo",
        "last_name": "Mustapha",
        "email_token": {
            "_id": "60b33fb960e3b3596b205a9f",
            "token": "0",
            "createdAt": "2021-05-30T10:33:13+03:00"
        },
        "password": "$2b$10$6iVIYCpfyEHaM7X771N11.GlMXxl9eEhujHwb5uWJfDoJFH2qBKMq",
        "__v": 2,
        "last_login": "2021-06-08T09:41:44.064Z",
        "citizen": "Nigeria",
        "tax_id": null,
        "time_zone": "+05:00"
    },
    "errors": {},
    "message": "Request successful"
}
*/

/**
 * @apiDefine AddUserAddressSuccessResponse
 * @apiName Add User Address
 * @apiSuccessExample {json} Success Response
 * 200 OK
{
    "data": {
        "type": [
            "default"
        ],
        "_id": "60e9c351050bb179bacdacf3",
        "country": "nigeria",
        "state": "Lagos",
        "city": "Anthony",
        "postal_code": "100243",
        "account_id": "60e6c4e56f6f904801223796",
        "__v": 0
    },
    "errors": {},
    "message": "Request successful"
}
*/

/**
 * @apiDefine UpdateUserAddressSuccessResponse
 * @apiName Update User Address
 * @apiSuccessExample {json} Success Response
 * 200 OK
{
    "data": {
        "type": [
            "default"
        ],
        "_id": "60e9c351050bb179bacdacf3",
        "country": "cypruss",
        "state": "Nicosia",
        "city": "Nicosia",
        "postal_code": "901010",
        "account_id": "60e6c4e56f6f904801223796",
        "__v": 0
    },
    "errors": {},
    "message": "Request successful"
}
*/

/**
 * @apiDefine SetUp2faSuccessResponse
 * @apiName SetUp 2fa
 * @apiSuccessExample {json} Success Response
 * 200 OK
{
    "data": {
        "qr_code": "data:image/png;base64,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"
    },
    "errors": {},
    "message": "Request successful"
}
*/
