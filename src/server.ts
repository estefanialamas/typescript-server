import express, { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
dotenv.config()

import { loginRouter } from "./presentation/routers/login-router";
import { userRouter } from "./presentation/routers/user-router";


(async () => {
  
  const app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   console.log("middleware baseUrl", req.baseUrl);
  //   next();
  // });
  
  app.use("/login", loginRouter());
  app.use("/users", userRouter());

  // const { usersCollection, dogsCollection } = await connectToDatabase();
  // const userRepository: UserRepository = new UserRepositoryMongo(usersCollection);


  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
})();


