/**
 * @apiDefine LoginErrorResponse
 * @apiName Login
 * @apiSuccessExample {json} Error
 * 400 Bad Request
 {
    "data": {},
    "errors": [],
    "message": "account-invalid-login"
}
 */

/**
 * @apiDefine RegisterErrorResponse
 * @apiName Register
 * @apiSuccessExample {json} Error
 * 400 Bad Request
 {
    "data": {},
    "errors": {
        "email": "account-email-required",
        "password": "account-password-required",
        "confirm_password": "account-confirm-password-required"
    },
    "message": "Invalid requests"
}
 */

/**
 * @apiDefine GetProfileByUserIdErrorResponse
 * @apiName Get Profile By User Id
 * @apiSuccessExample {json} Error
 * 400 Bad Request
{
    "data": {},
    "errors": {},
    "message": "USER-NOT-FOUND"
}
 */

/**
 * @apiDefine GetProfileByUserEmailErrorResponse
 * @apiName Get Profile By User Email
 * @apiSuccessExample {json} Error
 * 400 Bad Request
{
    "data": {},
    "errors": {},
    "message": "USER-NOT-FOUND"
}
*/

/**
 * @apiDefine GetAllAccountsWithTypeErrorResponse
 * @apiName Get All Accounts With Type
 * @apiSuccessExample {json} Error
 * 400 Bad Request
{
    "data": {},
    "errors": {},
    "message": "NO-ACCOUNT-FOUND"
}
*/

/**
 * @apiDefine UpdateUserProfileErrorResponse
 * @apiName Update User Profile
 * @apiSuccessExample {json} Error
 * 400 Bad Request
{
    "data": {},
    "errors": {},
    "message": "PROFILE-UPDATE-ERROR"
}
*/

/**
 * @apiDefine AddUserAddressErrorResponse
 * @apiName Add User Address
 * @apiSuccessExample {json} Error
 * 400 Bad Request
{
    "data": {},
    "errors": {},
    "message": "ADD-ADDRESS-ERROR"
}
*/

/**
 * @apiDefine UpdateUserAddressErrorResponse
 * @apiName Update User Address
 * @apiSuccessExample {json} Error
 * 400 Bad Request
{
    "data": {},
    "errors": {},
    "message": "ADDRESS-UPDATE-ERROR"
}
*/







