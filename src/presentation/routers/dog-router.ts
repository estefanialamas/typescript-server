import express, { Router } from 'express'
import { Request, Response } from 'express'
import { Dog } from '../../domain/models/dog'
import { DogRepository } from '../dog-repository'
import Ajv from 'ajv';


export function dogRouter(dogRepository: DogRepository): Router {
    const dogRouter = express.Router()
    
    dogRouter.get('/', (req: Request, res: Response) => {
        console.log('dog')
        res.json('Hello Dog')
    })
    
    dogRouter.post('/', (req: Request, res: Response) => {
        console.log('dog post route working')
        
        const ajv = new Ajv();
        const dogSchema = {
            type: "object",
            properties: {
                name: { type: "string" },
                breed: { type: "string" },
            },
            required: ["name", "breed"],
            additionalProperties: false,
        }
        
        const valid = ajv.validate(dogSchema, req.body);
        if(!valid) {
            res.status(400).json({
                result: 'KO',
                errors: ajv.errors.map(e => e.message)
            });
            return; 
        }

        const { name, breed } = req.body;
        dogRepository.save({ name, breed} as Dog)
        res.status(200).json({
            result: 'OK',
            message: `saved Dog: ${name}, ${breed}`
        })
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
