import express, { Router } from 'express'
import { Request, Response } from 'express'
import  SpotifyWebApiNode  from 'spotify-web-api-node'
import dotenv from 'dotenv'

dotenv.config()

const spotifyApi = new SpotifyWebApiNode({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
})

export function loginRouter( spotifyApi: SpotifyWebApiNode): Router {
     
    const loginRouter = express.Router()
    

    loginRouter.get('/', (req: Request, res: Response) => {
        const scopes = ['user-read-private', 'user-read-email']
        const state = 'some-state';
        const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state)
        res.redirect(authorizeURL)
    })

    loginRouter.get('/callback', (req: Request, res: Response) => {
        const { code } = req.query
        const redirectUri = process.env.REDIRECT_URI
        spotifyApi.authorizationCodeGrant(code as string).then(
            data => {
                const { access_token, refresh_token } = data.body
                spotifyApi.setAccessToken(access_token)
                spotifyApi.setRefreshToken(refresh_token)
                res.redirect(redirectUri)
            },
            err => {
                console.log('Something went wrong!', err)
            }
        )
    })

    return loginRouter
}

