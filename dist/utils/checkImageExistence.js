"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// check if the image exists
function checkIfImageExists(path) {
    let bool = false;
    try {
        fs_1.default.accessSync(path, fs_1.default.constants.F_OK);
        bool = true;
    }
    catch (error) {
        return bool;
    }
    return bool;
}
exports.default = checkIfImageExists;
