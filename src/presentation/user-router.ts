import express, { Router } from 'express'
import { Request, Response } from 'express'
import {UserRepository} from './user-repository'

export function userRouter(userRepository: UserRepository): Router {
    const userRouter = express.Router()

    userRouter.get('/', (req: Request, res: Response) => {
        res.send('Hello World')
    })

    userRouter.post('/', (req: Request, res: Response) => {
        console.log('post route working')
        const user = req.body;
        userRepository.save(user);
        res.send('post route working')
    })

    userRouter.put('/', (req: express.Request, res: express.Response) => {
        console.log('put route working')
        res.send('put route working')
    })

    userRouter.put('/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('Request URL:', req.originalUrl)
        next()
    }, (req, res, next) => {
        console.log('Request Type:', req.method)
        next()
    })

    userRouter.delete('/', (req: express.Request, res: express.Response) => {
        console.log('delete route working')
        res.send('delete route')
    })

    return userRouter;

}
