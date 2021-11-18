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
@apiParam {string = 'Customer','Customer'} membership_type 
@apiParam {number} [token] Only required in stage 2 
@apiSuccessExample {json} Request Stage 1 
{
    "first_name": "Victor",
    "last_name": "Alade",
    "email": "vstar4all+2392@gmail.com",
    "password": "Password29",
    "confirm_password": "Password29",
    "stage": 1,
    "membership_type": "Customer"
}

@apiSuccessExample {json} Request Stage 2 
{

    "stage": 2,
    "token": 149696,
    "id": "aaa3dsdsfe5453"
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
@apiDefine UpdateProductRequest
@apiParam {String} [id] Product's Unique Id
@apiParam {String} [name] Product Name
@apiParam {Number} [price] Product Price
@apiParam {String} [description] Product Description
@apiParam {String} [countInStock] Product Count
@apiSuccessExample {json} Update Product Request
{
  "id": "61965661c9e1d3baea0842a9",
  "name": "Channel Bag",
  "price": 5040,
  "description": "Blacky",
  "countInStock": 7
}
*/

/**
 * 
@apiDefine DeleteProductRequest
@apiParam {String} receiver_id Receiver's Unique Id
@apiSuccessExample {json} Delete Product Request
{
    "id":"60d48e27c100d94264ca6e0e"
}
*/

