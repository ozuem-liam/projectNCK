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
