"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const prepareImages_1 = require("../../utils/prepareImages");
const api = express_1.default.Router();
const imageFullPath = path_1.default.resolve(__dirname, '../../../images/full');
const imageThumbPath = path_1.default.resolve(__dirname, '../../../images/thumb');
api.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const images = yield (0, prepareImages_1.makeImagesArray)();
    // check if the user enter filename, width and height
    if (req.query.filename && req.query.width && req.query.height) {
        const { filename, width, height } = req.query;
        //check the filename is in the full folder
        if (!images.includes(`${filename}.jpg`)) {
            res.send('<h1>filename does not exist</h1> <h2>filname example : fjord</h2>');
        }
        // make an image with the entered inputes (width,height)
        yield (0, sharp_1.default)(`${imageFullPath}/${filename}.jpg`)
            .resize(parseInt(width, 10), parseInt(height, 10))
            .toFile(`./images/thumb/resized-${width}-${height}-${filename}.jpg`);
        // display the resized image on the screen
        res.sendFile(`${imageThumbPath}/resized-${width}-${height}-${(0, prepareImages_1.searchForImage)(images, filename.toString())}.jpg`);
    }
    else {
        res.send('<h1>Please make sure to type filename, width and height of the image</h1> <h2>filname example : fjord</h2> ');
    }
}));
exports.default = api;
