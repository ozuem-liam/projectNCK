/**
@apiDefine LoginRequest
@apiParam {String} email Users email
@apiParam {String} password Users password
@apiParam {String} [otp] for user with 2FA enabled
@apiSuccessExample {json} Request
{
    "email": "alade.victor12@gmail.com",
    "password": "Password29"    
}
*/

/**
@apiDefine RegisterRequest
@apiParam {String} first_name User's firstname
@apiParam {String} last_name User's firstname
@apiParam {String} email User's email
@apiParam {String} password User's password
@apiParam {String} confirm_password  Password Confirmation
@apiParam {number = 1,2} stage Registration stage
@apiParam {string = 'Employee','Employee'} membership_type 
@apiParam {number} [token] Only required in stage 2 
@apiSuccessExample {json} Request Stage 1 
{
    "first_name": "Victor",
    "last_name": "Alade",
    "email": "vstar4all+2392@gmail.com",
    "password": "Password29",
    "confirm_password": "Password29",
    "stage": 1,
    "membership_type": "Employee"
}

@apiSuccessExample {json} Request Stage 2 
{

    "stage": 2,
    "token": 149696,
    "id": "aaa3dsdsfe5453"
}


*/

/**
@apiDefine SendEmailRequest
@apiParam {String} [email] Only required when type is PasswordReset
@apiParam {String} [id] U Only required when type is EmailConfirmation
@apiParam {String='PasswordReset', 'EmailConfirmation'} [type] 
@apiSuccessExample {json} Send Password Reset Request 
{
    "type": "PasswordReset",
    "email": "vstar4all+29aopa888scz3@gmail.com"
}

@apiSuccessExample {json} Send Email Confirmation Request 
{
    "type": "EmailConfirmation",
    "id": "faereere3355fdg"
}
*/

/**
  
@apiDefine ResetPasswordRequest
@apiParam {String} email User's email
@apiParam [String] password User's new password (required for stage 2)
@apiParam [String] confirm_password  new password Confirmation (required for stage 2)
@apiParam {number = 1,2} stage 
@apiParam {number} token Email cverification token 
@apiSuccessExample {json} Request Stage 1  
{
    "email": "vstar4all@gmail.com",
    "stage": 1,
    "token": 158376,
}

@apiSuccessExample {json} Request Stage 2 
{
    "email": "vstar4all@gmail.com",
    "password": "Password2912",
    "confirm_password": "Password2912",
    "stage": 2,
    "token": 158376,
}
*/

/**
 * 
@apiDefine GetProfileByUserIdRequest
@apiQuery {string} user_id Users Unique ID
@apiSuccessExample {json} Request
{
    "user_id": "60b33f8060e3b3596b205a9c",
}
*/

/**
 * 
@apiDefine GetProfileByUserEmailRequest
@apiQuery {string} email User's Email Address
@apiSuccessExample {json} Request
{
    "email": "victor@raenest.com",
}
*/

/**
 * 
@apiDefine GetAllAccountsWithTypeRequest
@apiQuery {String=Employee,Employer} [membership_type="Employee"] Membership Type , Default value without passing any parameter returns for membership_type Employee
@apiQuery {String} [per_page] Record Per Page
@apiQuery {String} [page] Page To Query
@apiSuccessExample {json} Request
{
    "membership_type": "Employee",
    "per_page": 50,
    "page": 1,
}
*/

/**
 * 
@apiDefine UpdateUserProfileRequest
@apiQuery {String} user_id User's Unique Id
@apiParam {String} [first_name] User's First Name
@apiParam {String} [last_name] User's Last Name
@apiParam {String} [email] User's Email
@apiParam {String} [time_zone] User's Timezone
@apiParam {number} [phone_number] User's Phone Number
@apiParam {String} [passport_number] User's Passport
@apiParam {String} [citizen] User's Nationality / Country of Citizenship
@apiParam {String='Employee', 'Employers'} [membership_type] User's Membership Type
@apiSuccessExample {json} Update Profile Request
{
    "first_name": "Sodruldeen Temitayo",
    "last_name": "Mustapha",
    "email": "zodbis@raenest.com",
    "time_zone": "+03:00",
    "phone_number": 01234567898,
    "passport_number": "A082987654",
    "citizen": "Canadian",
    "membership_type": "Employee"
}
*/

/**
 * 
@apiDefine AddUserAddressRequest
@apiParam {String} account_id User's Unique Id
@apiParam {String} [country] User's Address Country
@apiParam {String} [state] User's Address State
@apiParam {String} [city] User's Address City
@apiParam {String} [postal_code] User's Address Postal Code
@apiParam {String='default','postal'} [type='default'] User's Address Type
@apiSuccessExample {json} Add Profile Request
{
    "account_id":"60b4dbf9441187caa97e7037"
    "country":"Cyprus",
    "state":"Nicosia",
    "city":"Nicosia",
    "postal_code":"90101",
    "type":"default",
}
*/

/**
 * 
@apiDefine UpdateUserAddressRequest
@apiQuery {String} address_id User's Address Id
@apiParam {String} [country] User's Address Country
@apiParam {String} [state] User's Address State
@apiParam {String} [city] User's Address City
@apiParam {String} [postal_code] User's Address Postal Code
@apiParam {String='default','postal'} [type='default'] User's Address Type
@apiSuccessExample {json} Update Profile Request
{
    "country":"Cyprus",
    "state":"Nicosia",
    "city":"Nicosia",
    "postal_code":"90101",
    "type":"default",
}
*/

/**
 * 
@apiDefine AddNotificationRequest
@apiParam {String} [subject] Notification Subject
@apiParam {String} [content] Notification Content
@apiParam {String} [destination] Notification Destination URL
@apiParam {String} [receiver_type] Membership type
@apiParam {String} receiver_id Receiver's Unique Id
@apiSuccessExample {json} Add Notification Request
{
    "subject":"Credit alert",
    "content":"Sent 900k",
    "destination":"url",
    "receiver_type":"Employee",
    "receiver_id":"60d48e27c100d94264ca6e0e"
}
*/

/**
 * 
@apiDefine UpdateNotificationRequest
@apiParam {String} [subject] Notification Subject
@apiParam {String} [content] Notification Content
@apiParam {String} [destination] Notification Destination URL
@apiParam {String} [receiver_type] Membership type
@apiParam {String} receiver_id Receiver's Unique Id
@apiSuccessExample {json} Update Notification Request
{
    "subject":"Debit alert",
    "content":"Withdrawed 700k",
    "destination":"url",
    "receiver_type":"Employee",
    "receiver_id":"60d48e27c100d94264ca6e0e"
}
*/

/**
 * 
@apiDefine DeleteNotificationRequest
@apiParam {String} receiver_id Receiver's Unique Id
@apiSuccessExample {json} Delete Notification Request
{
    "notification_id":"60d48e27c100d94264ca6e0e"
}
*/

