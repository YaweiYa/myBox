import express from 'express'

const router = express.Router()

router.get('/diagnostic/heartbeat', (req, res, next) => {
    res.send('OK')
})

router.get('/welcome', (req, res) => {
    res.send('Welcome to MyBox!')
})

export default router
