# User Registration Endpoint Documentation

## POST `/users/register`

### Description
This endpoint allows a new user to register by providing their first name, last name, email, and password.  
It validates the input, creates a new user in the database, and returns a JWT token along with the user data (excluding the password).

---

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

### Responses

#### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First Name must be at least 3 characters long.",
        "param": "fullname.firstname",
        "location": "body"
      },
      ...
    ]
  }
  ```

#### Missing Fields

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "All fields are required!"
      }
    ]
  }
  ```

---

### Example Request

```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}'
```

---

### Notes

- The password is securely hashed before being stored.
- The returned JWT token can be used for authentication in subsequent requests.
- The password field is never returned in the





# User Login Endpoint Documentation

## POST `/users/login`

### Description
This endpoint allows an existing user to log in by providing their email and password.  
It validates the input, checks the credentials, and returns a JWT token along with the user data (excluding the password).

---

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long.",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

---

### Example Request

```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}'
```

---

### Notes

- The password is securely compared using bcrypt.
- The returned JWT token can be used for authentication in subsequent requests.
- The password field is never returned in the response.





# User Profile Endpoint Documentation

## GET `/users/profile`

### Description
This endpoint returns the authenticated user's profile information.  
It requires a valid JWT token (sent as a cookie or in the `Authorization` header).

---

### Authentication

- **Required:** Yes (JWT token)
- **How to send:**  
  - As a cookie named `token`, or  
  - As a header: `Authorization: Bearer <jwt_token>`

---

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
  ```

#### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized!"
  }
  ```

---

### Example Request

```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer <jwt_token>"
```

---

# User Logout Endpoint Documentation

## GET `/users/logout`

### Description
This endpoint logs out the authenticated user by blacklisting their JWT token and clearing the authentication cookie.

---

### Authentication

- **Required:** Yes (JWT token)
- **How to send:**  
  - As a cookie named `token`, or  
  - As a header: `Authorization: Bearer <jwt_token>`

---

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged Out"
  }
  ```

#### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized!"
  }
  ```

---

### Example Request

```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer <jwt_token>"
```

---

### Notes

- After logout, the token is blacklisted and cannot be used for further requests.
- The authentication cookie is cleared