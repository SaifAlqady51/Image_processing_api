import request from 'supertest';
import routes from '../../routes/index';

describe('Test /api route', (): void => {
  // test if route /api successfully work
  it('responds with 200', (done): void => {
    request(routes).get('/api').expect(200);
    done();
  });
});
