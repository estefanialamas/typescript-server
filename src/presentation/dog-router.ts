import express, { Router } from 'express'
import { Request, Response } from 'express'
import { Dog } from '../domain/models/dog'
import { DogRepository } from './dog-repository'


export function dogRouter(dogRepository: DogRepository): Router {
    const dogRouter = express.Router()
    
    dogRouter.get('/', (req: Request, res: Response) => {
        console.log('dog')
        res.json('Hello Dog')
    })
    
    dogRouter.post('/', (req: Request, res: Response) => {
        console.log('dog post route working')
        const { name, breed } = req.body;
        dogRepository.save({ name, breed } as Dog)
        res.json({ name, breed })
    })
    
    dogRouter.put('/:id', (req: express.Request, res: express.Response) => {
        console.log('edited doggy')
        res.send ('edited doggy')
    })
    
    dogRouter.delete('/', (req: express.Request, res: express.Response) => {
        console.log('deleted dog')
        res.send ('deleted dog')
    })

    return dogRouter
}
