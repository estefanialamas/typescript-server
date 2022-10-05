import express, { Router } from 'express'
import { Request, Response } from 'express'
import  SpotifyWebApiNode  from 'spotify-web-api-node'


export function userRouter (): Router {
    
    const userRouter = express.Router()

    userRouter.get('/me', async (req: Request, res: Response) => {
        const spotifyAccess = new SpotifyWebApiNode();
        spotifyAccess.setAccessToken(process.env.TOKEN)

        try {
        const response = await spotifyAccess.getUser('31hvgh4rdavrbxuy4xqczu6axbnq');
        res.send(response.body)
        } catch (err) {
            res.send(err)
        }

       
    })

    return userRouter
}

