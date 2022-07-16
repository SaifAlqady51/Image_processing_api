import express from 'express';
import path from 'path';
import checkIfImageExists from '../utils/checkImageExistence';
import sharpFun from '../utils/sharpFun';

//creating the path to the full and thumb folders
const imageFullPath = path.resolve(__dirname, '../../images/full');
const imageThumbPath = path.resolve(__dirname, '../../images/thumb');

//making middleware to store data in thumb folder
async function resizeImage(
  req: express.Request,
  res: express.Response,
  next: () => void
): Promise<unknown> {
  //check if the user enter filname, width and height query
  if (req.query.filename && req.query.width && req.query.height) {
    const { filename, width, height } = req.query;
    // check if filename in full folder
    const checkFull = checkIfImageExists(`${imageFullPath}/${filename}.jpg`);
    // check if image is already in thumb folder
    const checkThumb = checkIfImageExists(
      `${imageThumbPath}/resized-${width}-${height}-${filename}.jpg`
    );

    if (checkFull) {
      if (checkThumb) {
        // return the image from the thumb folder if it is exists
        return res.sendFile(
          `${imageThumbPath}/resized-${width}-${height}-${filename}.jpg`
        );
      } else {
        // create the image and add it to the thumb folder
        await sharpFun(filename, width, height);
      }
      // return the imager from the thumb folder
      return res.sendFile(
        `${imageThumbPath}/resized-${width}-${height}-${filename}.jpg`
      );
    } else {
      res.send(
        '<h1>filename does not exist</h1> <h2>filname example : fjord</h2>'
      );
    }
  } else {
    res.send(
      '<h1>Please make sure to type filename, width and height of the image => localhost:3000/api/image?filname={}&width={}&height={}</h1><h2>filname example : fjord</h2> '
    );
  }

  next();
}

export default resizeImage;
