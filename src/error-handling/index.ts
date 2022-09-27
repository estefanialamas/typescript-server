import express from 'express';

const app = express();

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.use((error: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Error: ', req.method, req.path, error);

    if(res.headersSent) {
        return next(error);
    }
});

