import express, { Router } from 'express'
import { Request, Response } from 'express'
import User from '../../domain/models/Event'
import {UserRepository} from '../user-repository'

export function userRouter(userRepository: UserRepository): Router {

    const userRouter = express.Router()

    userRouter.get('/', (req: Request, res: Response) => {
        res.json('Hello World')
    })

    userRouter.post('/', (req: Request, res: Response) => {
        console.log('post route working')
        const { name, email } = req.body;
        userRepository.save({ name, email } as User);
        res.json({ name, email })
    })

    return userRouter;

}
