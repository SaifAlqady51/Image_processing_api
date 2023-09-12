import express from 'express';
import routes from './routes/index';

const app = express();

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('<h1>Go to localhost:3000/api/image</h1>');
});

app.use('/api', routes);

app.listen(3000, () => {
	console.log('listening to port 3000')
})
 

export default app;
