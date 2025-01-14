import request from 'supertest';
import express from 'express'
import { createTaskController } from '../src/controllers/createTaskController.ts'
import { mongodbConnection } from '../src/middlewares/mongodbConnection.ts'
import mongoose from 'mongoose';


const app = express()
app.use(express.json())
app.use(mongodbConnection)
app.post('/api/todos', createTaskController)

afterAll(async () => await mongoose.connection.close())

describe('POST /todos', () => {
    it('should create a new task and return the updated document', async () => {
        const newTask = {
            email: 'qweqweqwe@gmail.com',
            task: 'Test task'
        }

        const response = await request(app)
            .post('/api/todos')
            .send(newTask)
            .expect(200)
        
        expect(response.body.message).toBe('OK')
        
    })
})