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
Object.defineProperty(exports, "__esModule", { value: true });
const prepareImages_1 = require("../utils/prepareImages");
it('Create array of images names ', () => __awaiter(void 0, void 0, void 0, function* () {
    const imagesArray = yield (0, prepareImages_1.makeImagesArray)();
    expect(imagesArray).toEqual([
        'encenadaport.jpg',
        'fjord.jpg',
        'icelandwaterfall.jpg',
        'palmtunnel.jpg',
        'santamonica.jpg',
    ]);
}));
it('Search for image in image Array', () => {
    const image = (0, prepareImages_1.searchForImage)([
        'encenadaport.jpg',
        'fjord.jpg',
        'icelandwaterfall.jpg',
        'palmtunnel.jpg',
        'santamonica.jpg',
    ], 'fjord');
    expect(image).toEqual('fjord');
});
it('Search for undefined image name', () => {
    const image = (0, prepareImages_1.searchForImage)([
        'encenadaport.jpg',
        'fjord.jpg',
        'icelandwaterfall.jpg',
        'palmtunnel.jpg',
        'santamonica.jpg',
    ], 'fjod');
    expect(image).toEqual('');
});
