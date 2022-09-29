import express from 'express'
import { Request, Response } from 'express'
const dogRouter = express.Router()

dogRouter.get('/dog', (req: Request, res: Response) => {
    console.log('dog')
    res.send('Hello Dog')
})

dogRouter.post('/dog/:id', (req: Request, res: Response) => {
    console.log('dog post route working')
    res.send ('new dog!')
})

dogRouter.put('/dog', (req: express.Request, res: express.Response) => {
    console.log('edited doggy')
    res.send ('edited doggy')
})

dogRouter.delete('/dog', (req: express.Request, res: express.Response) => {
    console.log('deleted dog')
    res.send ('deleted dog')
})

export default dogRouter