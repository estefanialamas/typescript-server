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
        res.json(response.body)
        console.log(response.body)
        } catch (err) {
            res.json(err)
        }
    })

    userRouter.get('/me/top/artists', async (req: Request, res: Response) => {
        try {
            spotifyAccess.setAccessToken(config.appToken)
            const response = await spotifyAccess.getMyTopArtists();
            console.log(response.body)
            res.json(response.body)
        } catch (err) {
            res.json(err)
        }
    })

    userRouter.get('/me/recently-played', async (req: Request, res: Response) => {
        try {
            spotifyAccess.setAccessToken(config.appToken)
        
            const response = await spotifyAccess.getMyRecentlyPlayedTracks({limit: 50, after: 0, before: 0});
            console.log(response.body)
            res.json(response.body)
        } catch (err) {
            res.json(err)
        }

            
  })

//   userRouter.get('/me/top/artists', async (req: Request, res: Response) => {
//     try {
//         spotifyAccess.setAccessToken(config.appToken)
//         const response = await fetch(`https://api.spotify.com/v1/me/top/artists`, {
//             method: 'GET',
//          });

//         const json = await response.json();
//         return json;

//         } catch (err) {
//             res.json(err)
//         }

//     })
    return userRouter
}
