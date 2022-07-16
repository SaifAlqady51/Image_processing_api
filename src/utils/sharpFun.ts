import sharp from 'sharp';
import path from 'path';

const imageFullPath = path.resolve(__dirname, '../../images/full');

// sharpFun is a function to create image with specific width and height values
async function sharpFun(
  filename: unknown,
  width: unknown,
  height: unknown
): Promise<void> {
  try {
    await sharp(`${imageFullPath}/${filename as string}.jpg`)
      .resize(parseInt(width as string, 10), parseInt(height as string, 10))
      .toFile(
        `./images/thumb/resized-${width as string}-${height as string}-${
          filename as string
        }.jpg`
      );
  } catch (error) {
    console.log(error);
  }
}

export default sharpFun;
