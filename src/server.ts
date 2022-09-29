import express, {NextFunction, Request, Response} from 'express';

import { UserRepositoryMongo } from './user-repository-mongo';
import { userRouter } from './presentation';
// import { Dog, Breed } from './domain/models/dog';
// import User from './domain/models/user';
// import dogRouter from './presentation/dog-router';


const app = express();

app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('middleware baseUrl', req.baseUrl)
    next()
})

const userRepository = new UserRepositoryMongo();

// app.use('/dog', dogRouter)
app.use('/users', userRouter(userRepository))

app.listen(3200, () => { 
    console.log('Server running on port 3200')
})

// const rosco = new Dog('Rosco', Breed.POODLE);
// const fani = new User('Fani', [rosco]);
// fani.introduce()