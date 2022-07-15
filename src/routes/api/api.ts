import express from 'express';
import path from 'path';
import resizeImage from '../../utils/middleware';

import { makeImagesArray, searchForImage } from '../../utils/prepareImages';

const api = express.Router();
const imageThumbPath = path.resolve(__dirname, '../../../images/thumb');

api.get(
  '/',
  resizeImage,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const images = await makeImagesArray();

    // check if the user enter filename, width and height
    if (images && req.query.filename && req.query.width && req.query.height) {
      const { filename, width, height } = req.query;

      //check the filename is in the full folder
      if (!images.includes(`${filename as string}.jpg`)) {
        res.send(
          '<h1>filename does not exist</h1> <h2>filname example : fjord</h2>'
        );
      }

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
  }
);

export default api;
