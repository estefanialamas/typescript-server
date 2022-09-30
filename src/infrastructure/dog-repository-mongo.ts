import * as mongoDB from "mongodb";
import { Dog } from "../domain/models/dog";
import { DogRepository } from "../presentation/dog-repository";
import Ajv from 'ajv';

export class DogRepositoryMongo implements DogRepository {

    private dogsCollection: mongoDB.Collection<mongoDB.Document>;
 
    constructor(dogsCollection: mongoDB.Collection) {
        this.dogsCollection = dogsCollection;
    }
    
    async save(dog: Dog): Promise<void> {    
        const dogToSave = {
            name: dog.name,
            breed: dog.breed
        }
        await this.dogsCollection.insertOne(dogToSave);
    }

    findByName(name: string): Dog {
        throw new Error("Method not implemented.");
    }
}