"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api/api"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('<h1>Go to localhost:3000/api/image</h1>');
});
routes.use('/image', api_1.default);
exports.default = routes;
