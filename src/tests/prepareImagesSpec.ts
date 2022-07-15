import { makeImagesArray, searchForImage } from '../utils/prepareImages';

describe('Test prepareimage functions ', () => {
  it('Create array of images names ', async () => {
    const imagesArray = await makeImagesArray();
    expect(imagesArray).toEqual([
      'encenadaport.jpg',
      'fjord.jpg',
      'icelandwaterfall.jpg',
      'palmtunnel.jpg',
      'santamonica.jpg',
    ]);
  });

  it('Search for image in image Array', () => {
    const image = searchForImage(
      [
        'encenadaport.jpg',
        'fjord.jpg',
        'icelandwaterfall.jpg',
        'palmtunnel.jpg',
        'santamonica.jpg',
      ],
      'fjord'
    );
    expect(image).toEqual('fjord');
  });

  it('Search for undefined image name', () => {
    const image = searchForImage(
      [
        'encenadaport.jpg',
        'fjord.jpg',
        'icelandwaterfall.jpg',
        'palmtunnel.jpg',
        'santamonica.jpg',
      ],
      'fjod'
    );

    expect(image).toEqual('');
  });
});
