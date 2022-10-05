import express, { Router } from 'express'
import { Request, Response } from 'express'
import axios from 'axios'
import qs from 'qs'

export function loginRouter(): Router {
     
    const loginRouter = express.Router();
    const qsGrandType = qs.stringify({'grant_type':'client_credentials'});
    const authHeader = Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64');
    

    loginRouter.post('/', async (req: Request, res: Response) => {
        try {
        const response = await axios({
            method: 'POST',
            headers: {
                'content-type':'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authHeader}`
            },
            data: qsGrandType,
            url: 'https://accounts.spotify.com/api/token',
        })
        process.env.TOKEN = response.data.access_token
        res.send(response.data);

        } catch(err) {
            res.status(500).send(err)
        }
    })

    return loginRouter
}

