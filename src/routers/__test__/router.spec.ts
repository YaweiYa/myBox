import router from '../index'
import request from 'supertest'
import express from 'express'

describe('router', () => {

    const app = express()

    beforeAll(() => app.use(router))

    it('should return 200 when hit /diagnostic/heartbeat', async () => {
        await request(app)
            .get('/diagnostic/heartbeat')
            .expect(200, 'OK')
    })
})
