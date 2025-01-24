# User-Auth API

## Description
This is an API for user authentication using Node.js, Express, and TypeScript. The API allows users to sign up, log in, and verify tokens.

## Installation
Follow these steps to install and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/MatiFiordelli/DevLabs-Microservices.git
   cd user-auth

2. Install the dependencies:
   npm install

3. Set up environment variables: Create a .env file in the root of the project and add the following variables:
   MONGO_URI=
   SECRET_FOR_TOKEN=

4. Start the server:
   npx nodemon ./src/app.ts

5. Access the API: The API will be available at:
   http://localhost:4000
   https://dev-labs-microservices-user-auth.vercel.app/

## Usage - Endpoints:
POST /api/auth/login: User login.
POST /api/auth/signup: User signup.
GET /api/auth/verify-token: Verify user token.

## API Documentation:
The API documentation is available once the server is running, at: 
http://localhost:4000/api-docs 
https://dev-labs-microservices-user-auth.vercel.app/api-docs/

## Technologies Used:
1. Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
2. Express: Fast, unopinionated, minimalist web framework for Node.js.
3. TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
4. Mongoose: Elegant MongoDB object modeling for Node.js.
5. bcrypt: Library to help you hash passwords.
6. jsonwebtoken: Implementation of JSON Web Tokens.
7. Swagger: Simplifies API development by providing tools for API documentation.
8. dotenv: Module that loads environment variables from a .env file.
9. nodemon: Utility that monitors for any changes in your source and automatically restarts your server.
10. Sourcetree: A free Git client. It simplifies how you interact with your repositories.
11. MongoDB Compass: GUI for MongoDB to explore data, run queries, and interact with your database.
12. cors: Middleware for enabling CORS (Cross-Origin Resource Sharing).
13. zod: TypeScript-first schema declaration and validation library.