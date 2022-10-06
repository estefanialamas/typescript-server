import express from "express";
import dotenv from 'dotenv'
dotenv.config()

import { userRouter } from "./presentation";
import { Config } from "./infrastructure/configuration";


(async () => {
  
  const app = express();
  const configuration = await new Config().setToken()

  if (!configuration.appToken) {
    //configuration.refreshToken = await configuration.getRefreshToken(configuration.refreshToken)
    const refresh_token = await configuration.getRefreshToken()
    configuration.refreshToken = refresh_token.refreshToken
    console.log(refresh_token)
  }
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  
  app.use("/users", userRouter(configuration.appToken));


  app.listen(configuration.port, () => {
    console.log("Server running on port 3000");
  });
})();


