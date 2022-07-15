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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
//creating the path to the full folder
const imageFullPath = path_1.default.resolve(__dirname, '../../images/full');
//making middleware to store data in thumb folder
const resizeImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    try {
        yield (0, sharp_1.default)(`${imageFullPath}/${filename}.jpg`)
            .resize(parseInt(width, 10), parseInt(height, 10))
            .toFile(`./images/thumb/resized-${width}-${height}-${filename}.jpg`);
    }
    catch (error) {
        console.log(error);
    }
    next();
});
exports.default = resizeImage;