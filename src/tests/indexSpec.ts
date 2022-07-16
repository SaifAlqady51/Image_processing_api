import app from '../index';
import request from 'supertest';

describe('Test with /api/image route', (): void => {
  // test if /api/image is successfully running
  it('responds with 200', (done): void => {
    request(app).get('/api/image').expect(200);
    done();
  });
  // test with full url
  it('response with 200 full url', (done): void => {
    request(app).get('/api/image?filname=fjo&width=100&height=100').expect(200);
    done();
  });
  // test if there is missing query
  it('response with 400 missing query', (done): void => {
    request(app).get('/api/image?filname=fjo&width=100&').expect(400);
    done();
  });
  // test if there is wrong query name
  it('response with 400 wrong query name', (done): void => {
    request(app).get('/api/image?name=fjo&width=100&height=100').expect(400);
    done();
  });
  // test if there are wrong query values
  it('response with 400 wrong width and height values', (done): void => {
    request(app)
      .get('/api/image?filname=fjo&width="abc"&height="afds"')
      .expect(400);
    done();
  });
});
