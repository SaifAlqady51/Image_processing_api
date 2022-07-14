import express from 'express';
import routes from './routes/index';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Go to localhost:3000/api/image</h1>');
});

app.use('/api', routes);

app.listen(3000, () => {
  console.log('start server on 3000 port');
});

export default app;
