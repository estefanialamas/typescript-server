import express, { Router } from 'express'
import { Request, Response } from 'express'
import  SpotifyWebApiNode  from 'spotify-web-api-node'
import { Configuration } from '../../domain/configuration';


export function userRouter (config: Configuration): Router {
    
    const userRouter = express.Router()
    const spotifyAccess = new SpotifyWebApiNode();

    userRouter.get('/me', async (req: Request, res: Response) => {

        try {
        spotifyAccess.setAccessToken(config.appToken)
        const response = await spotifyAccess.getUser('31hvgh4rdavrbxuy4xqczu6axbnq');
        res.send(response.body)
        } catch (err) {
            res.send(err)
        }

       
    })

    return userRouter
}

