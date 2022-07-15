import { promises as fsPromises } from 'fs';

import path from 'path';

// makeImageArray is a function making array of images names the api have
async function makeImagesArray(): Promise<string[] | void> {
  try {
    const imageFolderPath = path.resolve(__dirname, '../../images/full');
    const images: string[] = await fsPromises.readdir(imageFolderPath);
    return images;
  } catch (error) {
    console.log(error);
  }
}

// searchForArray is a function searching for the image name in the image array
function searchForImage(imageArray: string[], imageName: string): string {
  for (let i = 0; i < imageArray.length; i++) {
    if (imageArray[i].replace('.jpg', '') === imageName) {
      return imageName;
    }
  }

  return '';
}

export { makeImagesArray, searchForImage };
