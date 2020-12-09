import express from 'express'
import bodyParser from 'body-parser'
import { cabinetHandler } from '../handlers/cabinetHandler'

const router = express.Router()

router.get('/diagnostic/heartbeat', (_, res) => { res.send('OK') })

router.get('/welcome', (_, res) => { res.send('Welcome to MyBox!') })

router.post('/cabinets', bodyParser.json(), cabinetHandler)

export default router
