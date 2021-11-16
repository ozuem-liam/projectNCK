NCK is the user APIs for Raenest built on a Node.js framework [Fastify](http://express.com/) and Mongo DB

---

## Base Protocol

NCK API is built on top of the Representational State Transfer (REST) architecture design style. It's designed to be consumed by other Raenest Microservice

#### Methods

The API will answer to the following methods:

- GET
- POST
- PUT
- PATCH
- DELETE

#### Client Authentication

The API authentication:

- NCK Protected API authentication:

Users will need to authenticate in order to access resources.
Using the login endpoint resource with a valid email and password, the user will be granted access.
The authentication action will return a token. These will be required in following requests.

After login, the token must be sent in the header **_rnlekdn_** in all requests.
Lack or invalid access when necessary will result in a 401 response code.
If it is valid, but still not authorized, API will answer with a 401 status code.
The API client should end the session when appropriate by logging out.

- NCK Public API authentication:

Public API like the login, registration and reset password api still required **_rnlekdn_** in request headers. The access token for public route is available on Dashlane and should be saved in the envrironment variables.

- Using Axios
  withCredentials must be set to true when using axios

```
axios.defaults.baseURL = "https://raenest-u3bso73okq-uc.a.run.app/";
axios.defaults.headers.common["rnlekdn"] = "pogggfhg8";
axios.defaults.withCredentials = true;

```

#### Base response codes

The following codes are used with their standard meaning, across all requests:

- 200 OK
- 201 OK
- 400 Invalid Request
- 401 Unauthorized
- 403 Forbidden
- 405 Method Not Allowed

Other codes:

- 404 Not Found
- 500 Internal Server Error

#### Success response format

Any success response will be returned as

```json
{
  "data": {
    "destination": ""
  },
  "errors": {},
  "message": "check-email-for-token"
}
```

Every response representations are returned as object. The response code with success will be 200 HTTP OK

#### Error response format

Any invalid response or not success response will be returned as

```json
{
  "data": {},
  "errors": {
    "last_name": "account-lastname-required",
    "email": "account-email-required"
  },
  "message": "Invalid requests"
}
```
