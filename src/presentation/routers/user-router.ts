import express from 'express'
import { Request, Response } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

router.post('/', (req: Request, res: Response) => {
    console.log('post route working')
    res.send ('post route working')
})

router.put('/user', (req: express.Request, res: express.Response) => {
    console.log('put route working')
    res.send ('put route working')
})

router.put('/user/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {  
    console.log('Request URL:', req.originalUrl)
    next()
    }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})

router.delete('/user', (req: express.Request, res: express.Response) => {
    console.log('delete route working')
    res.send ('delete route')
})


export default router
