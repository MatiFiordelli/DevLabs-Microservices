import express, { Request, Response } from 'express'
import cors from 'cors'
import { router } from './routes/authRoutes.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { mongodbConnection } from './middlewares/mongodbConnection.js'
import { setupSwagger } from './swagger.js';

const app = express()
setupSwagger(app);
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const port = process.env.PORT || 4000
const corsHeaders = (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, DELETE, POST, PUT')
    res.status(200)
}

app.options('api/auth/login', corsHeaders)
app.options('api/auth/signup', corsHeaders)
app.options('api/auth/verify-token', corsHeaders)

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     responses:
 *       200:
 *         description: Welcome message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Welcome to user-auth API
 */
app.get('/', (req, res) => {
    res.send('Welcome to user-auth API')
})

app.use(mongodbConnection)

app.use('/api/auth', router)

app.use(errorHandler)

app.listen(port, () => console.log(`Server Working on port ${port}`))

