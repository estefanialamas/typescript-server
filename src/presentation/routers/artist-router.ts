import express, { Router } from 'express'
import { Request, Response } from 'express'
import  SpotifyWebApiNode  from 'spotify-web-api-node'
import { Configuration } from '../../domain/configuration';

export function artistRouter (config: Configuration) : Router {

    const artistRouter = express.Router()
    const spotifyAccess = new SpotifyWebApiNode();


    artistRouter.get('/johnny-cash', async (req: Request, res: Response) => {
        try {
            spotifyAccess.setAccessToken(config.appToken)
            const response = await spotifyAccess.getArtist('6kACVPfCOnqzgfEF5ryl0x') as any;
            console.log(response.body)
            res.status(200).json({
                name: response.body.name,
                images: response.body.images.map((i: { url: any; }) => i.url),
                genres: response.body.genres.join(', '),
                uri: response.body.uri,
            })
        } catch (err) {
            res.json(err)
        }
    })

    artistRouter.get('/johnny-cash/albums', async (req: Request, res: Response) => {
        try {
            spotifyAccess.setAccessToken(config.appToken)
            const response = await spotifyAccess.getArtistAlbums('6kACVPfCOnqzgfEF5ryl0x') as any;
            console.log(response.body)
            res.status(200).json({
                name: response.body.items.map((i: { name: any; }) => i.name),
            })
        } catch (err) {
            res.json(err)
        }
    })


    artistRouter.get('/licensed-to-ill', async (req: Request, res: Response) => {
        try {
            spotifyAccess.setAccessToken(config.appToken)
            const response = await spotifyAccess.getAlbum('11oR0ZuqB3ucZwb5TGbZxb') as any;
            console.log(response.body)
            res.status(200).json({
                name: response.body.name,
                //artistName: response.body.artists.map((i: { name: any; }) => i.name),
                artistName: response.body.artists[0].name,
                images: response.body.images[0].url,
                uri: response.body.uri,
            })
        } catch (err) {
            res.json(err)
        }
    })


    artistRouter.get('/kanye-and-jayz', async (req: Request, res: Response) => {
       
        try {
            spotifyAccess.setAccessToken(config.appToken)
            const response = await spotifyAccess.getArtists(['5K4W6rqBFWDnAN6FQUkS6x', '3nFkdlSjzX9mRTtwJOzDYB']) as any;
            console.log(response.body)
            res.status(200).json({
                name: response.body.artists.map((i: { name: any; }) => i.name),
            })
        } catch (err) {
            res.json(err)
        }
    })


    return artistRouter;
    
}