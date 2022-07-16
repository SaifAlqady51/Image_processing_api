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
const sharpFun_1 = __importDefault(require("../../utils/sharpFun"));
const checkImageExistence_1 = __importDefault(require("../../utils/checkImageExistence"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const imageThumbPath = path_1.default.resolve(__dirname, '../../../images/thumb');
describe('Test sharpFun ', () => {
    it('check creating image ', () => __awaiter(void 0, void 0, void 0, function* () {
        if ((0, checkImageExistence_1.default)(`${imageThumbPath}/resized-600-300-fjord.jpg`)) {
            fs_1.default.unlinkSync(`${imageThumbPath}/resized-600-300-fjord.jpg`);
        }
        yield (0, sharpFun_1.default)('fjord', '600', '300');
        expect((0, checkImageExistence_1.default)(`${imageThumbPath}/resized-600-300-fjord.jpg`)).toBeTruthy();
        fs_1.default.unlinkSync(`${imageThumbPath}/resized-600-300-fjord.jpg`);
    }));
    it('check creating unlisted image ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, sharpFun_1.default)('example', '600', '300');
        expect((0, checkImageExistence_1.default)(`${imageThumbPath}/resized-600-300-example.jpg`)).toBeFalsy();
    }));
    it('check wrong filename type', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, sharpFun_1.default)(43, 432, 432);
        expect((0, checkImageExistence_1.default)(`${imageThumbPath}/resized-432-432-43.jpg`)).toBeFalsy();
    }));
});
