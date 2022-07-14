import express from 'express';
import path from 'path';
import sharp from 'sharp';

import { makeImagesArray, searchForImage } from '../../utils/prepareImages';

const api = express.Router();
const imageFullPath = path.resolve(__dirname, '../../../images/full');
const imageThumbPath = path.resolve(__dirname, '../../../images/thumb');

api.get('/', async (req, res) : Promise<void> => {
  const images = await makeImagesArray();

  // check if the user enter filename, width and height
  if (images && req.query.filename && req.query.width && req.query.height) {
    const { filename, width, height } = req.query;

    //check the filename is in the full folder
    if (!images.includes(`${filename}.jpg` as string)) {
      res.send(
        '<h1>filename does not exist</h1> <h2>filname example : fjord</h2>'
      );
    }

    // make an image with the entered inputes (width,height)
    await sharp(`${imageFullPath}/${filename}.jpg`)
      .resize(parseInt(width as string, 10), parseInt(height as string, 10))
      .toFile(`./images/thumb/resized-${width}-${height}-${filename}.jpg`);

    // display the resized image on the screen
    res.sendFile(
      `${imageThumbPath}/resized-${width}-${height}-${searchForImage(
        images,
        filename.toString()
      )}.jpg`
    );
  } else {
    res.send(
      '<h1>Please make sure to type filename, width and height of the image => localhost:3000/api/image?filname={}&width={}&height={}</h1><h2>filname example : fjord</h2> '
    );
  }
});

export default api;
