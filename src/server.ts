import express from 'express';
//import path from 'path';

const router = express.Router()
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//app.use('/static', express.static(path.join(__dirname, 'public')))

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('middleware baseUrl', req.baseUrl)
    next()
})

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('Hello world')
})

app.post('/post', (req: express.Request, res: express.Response) => {
    console.log('post route working')
    res.send ('post route working')
})

app.put('/user', (req: express.Request, res: express.Response) => {
    console.log('put route working')
    res.send ('put route working')
})

app.put('/user/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })

app.delete('/user', (req: express.Request, res: express.Response) => {
    console.log('delete route working')
    res.send ('delete route')
}) 

app.all('/secret', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('Accessing the secret section ...')
    next() 
  })


app.listen(3200, () => { 
    console.log('Server running on port 3200')
})