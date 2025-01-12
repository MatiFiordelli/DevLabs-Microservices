import express, { Request, Response } from 'express'
import cors from 'cors'
import { router } from './routes'
import { errorHandler } from './middlewares/errorHandler'
import { mongodbConnection } from './middlewares/mongodbConnection'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const port = process.env.PORT || 4001
const corsHeaders = (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, DELETE, POST, PUT')
    res.status(200)
}

app.options('api/todos', corsHeaders)

app.get('/', (req, res) => {
    res.send('Welcome to todo-crud API')
})

app.use(mongodbConnection)

app.use('/api', router)

app.use(errorHandler)

app.listen(port, () => console.log(`Server Working on port ${port}`))

