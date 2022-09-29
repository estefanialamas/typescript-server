import express, { Router } from 'express'
import { Request, Response } from 'express'
import { DogRepository } from './dog-repository'


export function dogRouter(dogRepository: DogRepository): Router {
    const dogRouter = express.Router()
    
    dogRouter.get('/', (req: Request, res: Response) => {
        console.log('dog')
        res.send('Hello Dog')
    })
    
    dogRouter.post('/:id', (req: Request, res: Response) => {
        console.log('dog post route working')
        res.send ('new dog!')
    })
    
    dogRouter.put('/', (req: express.Request, res: express.Response) => {
        console.log('edited doggy')
        res.send ('edited doggy')
    })
    
    dogRouter.delete('/', (req: express.Request, res: express.Response) => {
        console.log('deleted dog')
        res.send ('deleted dog')
    })

    return dogRouter
}
