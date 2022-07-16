"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkImageExistence_1 = __importDefault(require("../../utils/checkImageExistence"));
const path_1 = __importDefault(require("path"));
const imageFullPath = path_1.default.resolve(__dirname, '../../../images/full');
const imageThumbPath = path_1.default.resolve(__dirname, '../../../images/thumb');
describe('Test checkImageExistence functions ', () => {
    // test checkIfImageExists if the the image is in full folder
    it('expect chekIfImageExists full path to be truthy', () => {
        expect((0, checkImageExistence_1.default)(`${imageFullPath}/fjord.jpg`)).toBeTruthy();
    });
    // test checkIfImageExists if the the image is not in full folder
    it('expect chekIfImageExists full path to be falsy', () => {
        expect((0, checkImageExistence_1.default)(`${imageFullPath}/example.jpg`)).toBeFalsy();
    });
    // test checkIfImageExists if the the image is in thumb folder
    it('expect chekIfImageExists thumb path to be truthy', () => {
        expect((0, checkImageExistence_1.default)(`${imageThumbPath}/resized-600-600-fjord.jpg`)).toBeTruthy();
    });
    // test checkIfImageExists if the the image is not in thumb folder
    it('expect chekIfImageExists thumb path to be falsy', () => {
        expect((0, checkImageExistence_1.default)(`${imageThumbPath}/resized-600-600-example.jpg`)).toBeFalsy();
    });
});
