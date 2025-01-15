# Todo-CRUD API

## Description
This is an API for managing tasks (todos) using Node.js, Express, and TypeScript. The API allows you to create, read, update, and delete tasks.

## Installation
Follow these steps to install and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/MatiFiordelli/DevLabs-Microservices.git
   cd todo-crud

2. Install the dependencies:
   npm install

3. Set up environment variables: Create a .env file in the root of the project and add the following variables:
   MONGO_URI=

4. Start the server:
   npx nodemon ./src/app.ts

5. Access the API: The API will be available at http://localhost:4001

## Usage - Endpoints:
POST /api/todos: Create a new task.
GET /api/todos: Retrieve a list of tasks.
GET /api/todos/:id: Retrieve a task by ID.
PUT /api/todos/:id: Update a task by ID.
DELETE /api/todos/:id: Delete a task by ID.

## API Documentation:
The API documentation is available at http://localhost:4001/api-docs once the server is running.

## Technologies Used:
Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
Express: Fast, unopinionated, minimalist web framework for Node.js.
TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
Mongoose: Elegant MongoDB object modeling for Node.js.
cors: Middleware for enabling CORS (Cross-Origin Resource Sharing).
node-fetch: A light-weight module that brings window.fetch to Node.js.
Swagger: Simplifies API development by providing tools for API documentation.
zod: TypeScript-first schema declaration and validation library.
nodemon: Utility that monitors for any changes in your source and automatically restarts your server.

## Running Tests - This project uses Jest for testing. To run the tests, use the following command:
npm test

