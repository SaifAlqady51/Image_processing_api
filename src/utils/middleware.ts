import express from 'express';
import sharp from 'sharp';
import path from 'path';

//creating the path to the full folder
const imageFullPath = path.resolve(__dirname, '../../images/full');

//making middleware to store data in thumb folder
const resizeImage = async (
  req: express.Request,
  res: express.Response,
  next: () => void
): Promise<void> => {
  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;
  try {
    await sharp(`${imageFullPath}/${filename}.jpg`)
      .resize(parseInt(width as string, 10), parseInt(height as string, 10))
      .toFile(`./images/thumb/resized-${width}-${height}-${filename}.jpg`);
  } catch (error) {
    console.log(error);
  }
  next();
};

export default resizeImage;
