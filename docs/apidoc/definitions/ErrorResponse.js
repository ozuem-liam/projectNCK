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








