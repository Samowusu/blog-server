## Blog API Documentation

### Introduction

Welcome to the Blog API documentation. This API allows users to create, view, update, and delete blog posts. Users must authenticate to perform these actions, and they can only manage their own posts.

### Table of Contents

- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Create a New Post](#create-a-new-post)
- [Get All Posts](#get-all-posts)
- [Get a Specific Post](#get-a-specific-post)
- [Update a Post](#update-a-post)
- [Delete a Post](#delete-a-post)

### Getting Started

To get started with the Blog API, follow these steps:

1. Clone the GitHub repository: [GitHub Repo URL](https://github.com/Samowusu/blog-server)
2. Install the necessary dependencies using `npm install`.
3. Set up your environment variables. Make sure you have the following variables in your `.env` file:

   - `PORT`: Port number for the API (default: 3000)
   - `MONGO_URI`: MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT authentication
   - `JWT_LIFETIME`: JWT token lifetime (e.g., "1d" for one day)

4. Run the API using `npm start`.

### Authentication

Authentication is required to interact with the API. You can obtain a token by registering a user account and logging in. Use the token by including it in the `Authorization` header as a Bearer token.

```http
GET /api/posts
Authorization: Bearer <your-token>
```

### Create a New Post

To create a new blog post, make a POST request to the following endpoint:

```http
POST /api/posts
Authorization: Bearer <your-token>
```

Include the following request body:

```json
{
  "post": "Your post content."
}
```

### Get All Posts

To retrieve all blog posts, make a GET request to the following endpoint:

```http
GET /api/posts
Authorization: Bearer <your-token>
```

### Get a Specific Post

To retrieve a specific blog post by its ID, make a GET request to the following endpoint:

```http
GET /api/posts/:id
Authorization: Bearer <your-token>
```

### Update a Post

To update an existing blog post, make a PATCH request to the following endpoint:

```http
PATCH /api/posts/:id
Authorization: Bearer <your-token>
```

Include the updated post data in the request body.

### Delete a Post

To delete a blog post, make a DELETE request to the following endpoint:

```http
DELETE /api/posts/:id
Authorization: Bearer <your-token>
```

### Error Handling

The API provides informative error responses for various scenarios, including invalid requests, unauthorized access, and not found resources. Be sure to handle errors appropriately in your application.
