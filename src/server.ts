import express, { NextFunction, Request, Response } from "express";
import  SpotifyWebApiNode  from "spotify-web-api-node";
import { loginRouter } from "./presentation/routers/login-router";
import { userRouter } from "./presentation/routers/user-router";
import dotenv from 'dotenv'

dotenv.config()

const spotifyApi = new SpotifyWebApiNode({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
});


(async () => {
  
  const app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   console.log("middleware baseUrl", req.baseUrl);
  //   next();
  // });
  
  app.use("/login", loginRouter(spotifyApi));
  app.use("/user", userRouter(spotifyApi));

  // const { usersCollection, dogsCollection } = await connectToDatabase();
  // const userRepository: UserRepository = new UserRepositoryMongo(usersCollection);


  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
})();


