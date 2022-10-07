import express from "express";
import dotenv from 'dotenv'
dotenv.config()

import { userRouter } from "./presentation";
import { Config } from "./infrastructure/configuration";


(async () => {
  
  const app = express();
  const configuration = await new Config();
  await configuration.setToken();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   console.log("middleware baseUrl", req.baseUrl);
  //   next();
  // });
  
  app.use("/users", userRouter(configuration));

  // const { usersCollection, dogsCollection } = await connectToDatabase();
  // const userRepository: UserRepository = new UserRepositoryMongo(usersCollection);


  app.listen(configuration.port, () => {
    console.log("Server running on port 3000");
  });
})();


