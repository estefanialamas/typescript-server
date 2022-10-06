import express, { Router, Request, Response } from "express";
import dotenv from 'dotenv'
dotenv.config()

import { userRouter } from "./presentation";
import { Config } from "./infrastructure/configuration";


(async () => {
  
  const app = express();
  const config = new Config();
  await config.generateAccessToken();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use("/users", userRouter(config.appToken));

  app.listen(config.port, () => {
    console.log("Server running on port 3000");
  });

})();


