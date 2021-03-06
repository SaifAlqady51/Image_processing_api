"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const api_1 = __importDefault(require("../../../routes/api/api"));
describe('Test the / route', () => {
    // test if / successfully work
    it('response with 200', (done) => {
        (0, supertest_1.default)(api_1.default).get('/').expect(200);
        done();
    });
});
