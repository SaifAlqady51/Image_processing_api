import sharpFun from '../../utils/sharpFun';
import checkIfImageExists from '../../utils/checkImageExistence';
import fs from 'fs';
import path from 'path';
const imageThumbPath = path.resolve(__dirname, '../../../images/thumb');

describe('Test sharpFun ', () => {
  // test that sharpFun create image if it's not exists
  it('check creating image ', async () => {
    if (checkIfImageExists(`${imageThumbPath}/resized-600-300-fjord.jpg`)) {
      fs.unlinkSync(`${imageThumbPath}/resized-600-300-fjord.jpg`);
    }
    await sharpFun('fjord', '600', '300');
    expect(
      checkIfImageExists(`${imageThumbPath}/resized-600-300-fjord.jpg`)
    ).toBeTruthy();

    fs.unlinkSync(`${imageThumbPath}/resized-600-300-fjord.jpg`);
  });
  // test sharpFun if the filename is not in full folder
  it('check creating unlisted image ', async () => {
    await sharpFun('example', '600', '300');
    expect(
      checkIfImageExists(`${imageThumbPath}/resized-600-300-example.jpg`)
    ).toBeFalsy();
  });
  // test sharpFun if filename has wrong type
  it('check wrong filename type', async () => {
    await sharpFun(43, 432, 432);
    expect(
      checkIfImageExists(`${imageThumbPath}/resized-432-432-43.jpg`)
    ).toBeFalsy();
  });
});
