import express, { Express, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

import connectDB from './mongodb/connect'
import productRouter from './routes/product.routes'

dotenv.config()

const PORT = process.env.PORT || 5000
const MONGODB_URL = process.env.MONGODB_URL as string

const app: Express = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (_: Request, res: Response) => {
  res.send({ message: 'Hello' })
})

app.use('/api/v1/products', productRouter)

const startServer = async () => {
  try {
    connectDB(MONGODB_URL)

    app.listen(PORT, () =>
      console.log(`Server started on port http://localhost:${PORT}`)
    )
  } catch (error) {
    console.error(error)
  }
}

startServer()
