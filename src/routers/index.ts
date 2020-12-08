import express from 'express'
import bodyParser from 'body-parser'
import { cabinetHandler } from '../handlers/cabinetHandler'

const router = express.Router()

router.get('/diagnostic/heartbeat', (req, res, next) => { res.send('OK') })

router.get('/welcome', (req, res) => { res.send('Welcome to MyBox!') })

router.post('/cabinets', bodyParser.json(), cabinetHandler)

export default router
