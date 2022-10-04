import express, { Router } from 'express'
import { Request, Response } from 'express'
import { Dog } from '../../domain/models/dog'
import { DogRepository } from '../dog-repository'
import Ajv from 'ajv';



export function dogRouter(dogRepository: DogRepository): Router {
    const dogRouter = express.Router()
    
    const ajv = new Ajv({allErrors: true}) // No instanciar dentro de post
    require("ajv-errors")(ajv); 
    
    ajv.addKeyword('isNotEmpty', {
        type: 'string',
        validate: function (_dogSchema: any, data: string | any[]) {
            return typeof data === 'string' && data.length > 0;
        },
        errors: false,
        keyword: 'isNotEmpty'
    });

    const dogSchema = {
        type: "object",
        properties: {
            name: { 
                type: "string",
                isNotEmpty: true,
                errorMessage: "Name field can't be empty"
         },
            breed: { 
                type: "string",
                isNotEmpty: true,
                errorMessage: "Breed field can't be empty"
            },
           
        },
        required: ["name", "breed"],
        additionalProperties: false,
        
    }
    


    dogRouter.get('/', (req: Request, res: Response) => {
        console.log('dog')
        res.json('Hello Dog')
    })
    
    dogRouter.post('/', (req: Request, res: Response) => {
        console.log('dog post route working')
        
        
        const valid = ajv.validate(dogSchema, req.body);

        if(!valid) {
            console.log(ajv.errors)
            res.status(400).json({
                result: 'KO',
                errors: ajv.errors.map(e => `${e.message}`)
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

    return dogRouter
}
