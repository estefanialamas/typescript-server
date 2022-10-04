import express, { NextFunction, Request, Response } from "express";

import { UserRepositoryMongo } from "./infrastructure/user-repository-mongo";
import { DogRepositoryMongo } from "./infrastructure/dog-repository-mongo";
import { userRouter } from "./presentation";
import { dogRouter } from "./presentation/routers/dog-router";
import { connectToDatabase } from "./infrastructure/connect-db";
import { UserRepository } from "./presentation/user-repository";

(async () => {
  
  const app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("middleware baseUrl", req.baseUrl);
    next();
  });
  
  const { usersCollection, dogsCollection } = await connectToDatabase();
  const userRepository: UserRepository = new UserRepositoryMongo(usersCollection);
  const dogRepository = new DogRepositoryMongo(dogsCollection);

  app.use("/users", userRouter(userRepository));
  app.use("/dogs", dogRouter(dogRepository));

  app.listen(3200, () => {
    console.log("Server running on port 3200");
  });
})();
