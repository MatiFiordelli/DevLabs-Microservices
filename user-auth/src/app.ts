import express, { Request, Response } from 'express'
import cors from 'cors'
import { router } from './routes/authRoutes'
import { errorHandler } from './middlewares/errorHandler'
import { mongodbConnection } from './middlewares/mongodbConnection'

const app = express()
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

app.get('/', (req, res) => {
    res.send('Welcome to user-auth API')
})

app.use(mongodbConnection)

app.use('/api/auth', router)

app.use(errorHandler)

app.listen(port, () => console.log(`Server Working on port ${port}`))

