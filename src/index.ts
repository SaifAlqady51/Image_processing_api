import express from 'express';
import serverless from 'serverless-http';
import routes from './routes/index';

const app = express();

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('<h1>Go to localhost:3000/api/image</h1>');
});

app.use('/api', routes);


export const handler = serverless(app);
