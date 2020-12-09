import express, { Express } from 'express'
import router from './routers'

export const app: Express = express()

const port = 8080

app.use(router)

app.listen(port)
