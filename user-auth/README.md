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

5. Access the API: The API will be available at http://localhost:4000

## Usage - Endpoints:
POST /api/auth/login: User login.
POST /api/auth/signup: User signup.
GET /api/auth/verify-token: Verify user token.

## API Documentation:
The API documentation is available at http://localhost:4000/api-docs once the server is running.

## Technologies Used:
Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
Express: Fast, unopinionated, minimalist web framework for Node.js.
TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
Mongoose: Elegant MongoDB object modeling for Node.js.
bcrypt: Library to help you hash passwords.
jsonwebtoken: Implementation of JSON Web Tokens.
Swagger: Simplifies API development by providing tools for API documentation.
dotenv: Module that loads environment variables from a .env file.
nodemon: Utility that monitors for any changes in your source and automatically restarts your server.
