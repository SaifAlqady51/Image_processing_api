"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../routes/index"));
describe('Test /api route', () => {
    it('responds with 200', (done) => {
        (0, supertest_1.default)(index_1.default).get('/api').expect(200);
        done();
    });
});
