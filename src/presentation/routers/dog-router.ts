import express from 'express'
import { Request, Response } from 'express'
const router = express.Router()

router.get('/dog', (req: Request, res: Response) => {
    console.log('dog')
    res.send('Hello Dog')
})

router.post('/dog/:id', (req: Request, res: Response) => {
    console.log('dog post route working')
    res.send ('new dog!')
})

router.put('/dog', (req: express.Request, res: express.Response) => {
    console.log('edited doggy')
    res.send ('edited doggy')
})

router.delete('/dog', (req: express.Request, res: express.Response) => {
    console.log('deleted dog')
    res.send ('deleted dog')
})

export default router