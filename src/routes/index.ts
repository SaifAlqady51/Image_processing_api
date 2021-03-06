import express from 'express';

import api from './api/api';
const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('<h1>Go to localhost:3000/api/image</h1>');
});

routes.use('/image', api);

export default routes;
