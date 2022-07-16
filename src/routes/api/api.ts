import express from 'express';
import resizeImage from '../../middleware/middleware';

const api = express.Router();
api.use('/', resizeImage);

export default api;
