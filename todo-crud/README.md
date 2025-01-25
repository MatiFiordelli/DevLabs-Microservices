# Todo-CRUD API

## Description
This is an API for managing tasks (todos) using Node.js, Express, and TypeScript. The API allows you to create, read, update, and delete tasks.

## Installation
Follow these steps to install and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/MatiFiordelli/DevLabs-Microservices.git
   cd todo-crud
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables: Create a .env file in the root of the project and add the following variables:
   ```bash
   MONGO_URI=
   ```

4. Start the server:
   ```bash
   npx nodemon ./src/app.ts
   ```

5. Access the API: The API will be available at: 
http://localhost:4001  
https://dev-labs-microservices-todo-crud.vercel.app/

## Usage - Endpoints:
POST /api/todos: Create a new task.  
GET /api/todos: Retrieve a list of tasks.  
GET /api/todos/:id: Retrieve a task by ID.  
PUT /api/todos/:id: Update a task by ID.  
DELETE /api/todos/:id: Delete a task by ID.

## API Documentation:
The API documentation is available once the server is running, at: 
http://localhost:4001/api-docs  
https://dev-labs-microservices-todo-crud.vercel.app/api-docs 

## Technologies Used:
1. Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
2. Express: Fast, unopinionated, minimalist web framework for Node.js.
3. TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
4. Mongoose: Elegant MongoDB object modeling for Node.js.
5. cors: Middleware for enabling CORS (Cross-Origin Resource Sharing).
6. node-fetch: A light-weight module that brings window.fetch to Node.js.
7. Swagger: Simplifies API development by providing tools for API documentation.
8. zod: TypeScript-first schema declaration and validation library.
9. nodemon: Utility that monitors for any changes in your source and automatically restarts your server.
10. Sourcetree: A free Git client. It simplifies how you interact with your repositories.
11. MongoDB Compass: GUI for MongoDB to explore data, run queries, and interact with your database.
12. ts-jest: A TypeScript preprocessor for Jest, enabling TypeScript testing.
13. Supertest: An HTTP testing library for APIs, simplifying endpoint testing.
14. Jest: A JavaScript testing framework known for its ease of use and speed.

## Running Tests - This project uses Jest for testing. To run the tests, use the following command:
```bash
npm test
```