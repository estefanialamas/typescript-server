import express, { Router } from 'express'
import { Request, Response } from 'express'
import  SpotifyWebApiNode  from 'spotify-web-api-node'
import dotenv from 'dotenv'
import querystring from 'query-string'

dotenv.config()

const spotifyApi = new SpotifyWebApiNode({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
})

export function userRouter (spotifyApi: SpotifyWebApiNode): Router {
    
    const userRouter = express.Router()

    userRouter.get('/me', async (req: Request, res: Response) => {

        const { access_token } = req.query
        console.log(access_token)
        try {
            spotifyApi.setAccessToken(access_token as string)
                console.log(access_token)
                const { body } = await spotifyApi.getMe()
            res.status(200).json({
                type: 'Success',
                message: 'Found user',
                body})
        } catch (error) {
            res.status(404).json({
                type: 'Error',
                message: 'User not found',
                error
            })
        }
    })

    return userRouter
}

