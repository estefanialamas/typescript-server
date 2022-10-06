import express, { Router } from 'express'
import { Request, Response } from 'express'
import  SpotifyWebApiNode  from 'spotify-web-api-node'


export function userRouter (token: string): Router {
    
    const userRouter = express.Router()
    const spotifyAccess = new SpotifyWebApiNode();
    spotifyAccess.setAccessToken(token)

    userRouter.get('/me', async (req: Request, res: Response) => {

        try {
        const response = await spotifyAccess.getUser('31hvgh4rdavrbxuy4xqczu6axbnq');
        res.send(response.body)
        } catch (err) {
            res.send(err)
        }

       
    })

    return userRouter
}

