import axios from 'axios'
import qs from 'qs'
import { Configuration } from "../domain/configuration";

export class Config implements Configuration {
    port: string
    clientId: string
    clientSecret: string
    dbUri: string
    dbName: string
    appToken: string
    constructor() {
        this.port = process.env.PORT;
        this.clientId =  process.env.CLIENT_ID;
        this.clientSecret= process.env.CLIENT_SECRET;
        this.dbUri= process.env.MONGODB_URI;
        this.dbName= process.env.DB_NAME;
    }
    public async setToken() {
        try {
        const qsGrandType =qs.stringify({'grant_type':'client_credentials'});
        const authHeader = Buffer.from(this.clientId + ':' + this.clientSecret).toString('base64');
        const response = await axios({
            method: 'POST',
            headers: {
                'content-type':'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authHeader}`
            },
            data: qsGrandType,
            url: 'https://accounts.spotify.com/api/token',
        })

        this.appToken = (response as any).data.access_token;

        return this;
        } catch (err) {
            console.error(err)
            throw err;
        }
    }
    }
