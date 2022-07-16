"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
describe('Test with /api/image route', () => {
    // test if /api/image is successfully running
    it('responds with 200', (done) => {
        (0, supertest_1.default)(index_1.default).get('/api/image').expect(200);
        done();
    });
    // test with full url
    it('response with 200 full url', (done) => {
        (0, supertest_1.default)(index_1.default).get('/api/image?filname=fjo&width=100&height=100').expect(200);
        done();
    });
    // test if there is missing query
    it('response with 400 missing query', (done) => {
        (0, supertest_1.default)(index_1.default).get('/api/image?filname=fjo&width=100&').expect(400);
        done();
    });
    // test if there is wrong query name
    it('response with 400 wrong query name', (done) => {
        (0, supertest_1.default)(index_1.default).get('/api/image?name=fjo&width=100&height=100').expect(400);
        done();
    });
    // test if there are wrong query values
    it('response with 400 wrong width and height values', (done) => {
        (0, supertest_1.default)(index_1.default)
            .get('/api/image?filname=fjo&width="abc"&height="afds"')
            .expect(400);
        done();
    });
});
