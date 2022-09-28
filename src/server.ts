import express from 'express';
import { Dog, Breed } from './domain/models/Dog';
import User from './domain/models/User';


const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('middleware baseUrl', req.baseUrl)
    next()
})


app.listen(3200, () => { 
    console.log('Server running on port 3200')
})

const rosco = new Dog('Rosco', Breed.POODLE);
const fani = new User('Fani', [rosco]);
fani.introduce()