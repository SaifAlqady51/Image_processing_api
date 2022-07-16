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
const path_1 = __importDefault(require("path"));
const checkImageExistence_1 = __importDefault(require("../utils/checkImageExistence"));
const sharpFun_1 = __importDefault(require("../utils/sharpFun"));
//creating the path to the full and thumb folders
const imageFullPath = path_1.default.resolve(__dirname, '../../images/full');
const imageThumbPath = path_1.default.resolve(__dirname, '../../images/thumb');
//making middleware to store data in thumb folder
function resizeImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        //check if the user enter filname, width and height query
        if (req.query.filename && req.query.width && req.query.height) {
            const { filename, width, height } = req.query;
            // check if filename in full folder
            const checkFull = (0, checkImageExistence_1.default)(`${imageFullPath}/${filename}.jpg`);
            // check if image is already in thumb folder
            const checkThumb = (0, checkImageExistence_1.default)(`${imageThumbPath}/resized-${width}-${height}-${filename}.jpg`);
            if (checkFull) {
                if (checkThumb) {
                    // return the image from the thumb folder if it is exists
                    return res.sendFile(`${imageThumbPath}/resized-${width}-${height}-${filename}.jpg`);
                }
                else {
                    // create the image and add it to the thumb folder
                    yield (0, sharpFun_1.default)(filename, width, height);
                }
                // return the imager from the thumb folder
                return res.sendFile(`${imageThumbPath}/resized-${width}-${height}-${filename}.jpg`);
            }
            else {
                res.send('<h1>filename does not exist</h1> <h2>filname example : fjord</h2>');
            }
        }
        else {
            res.send('<h1>Please make sure to type filename, width and height of the image => localhost:3000/api/image?filname={}&width={}&height={}</h1><h2>filname example : fjord</h2> ');
        }
        next();
    });
}
exports.default = resizeImage;
