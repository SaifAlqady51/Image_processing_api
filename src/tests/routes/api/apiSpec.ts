import request from 'supertest';
import api from '../../../routes/api/api';

describe('Test the / route', () => {
  // test if / successfully work
  it('response with 200', (done) => {
    request(api).get('/').expect(200);
    done();
  });
});
