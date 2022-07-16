import checkIfImageExists from '../../utils/checkImageExistence';
import path from 'path';

const imageFullPath = path.resolve(__dirname, '../../../images/full');
const imageThumbPath = path.resolve(__dirname, '../../../images/thumb');

describe('Test checkImageExistence functions ', () => {
  // test checkIfImageExists if the the image is in full folder
  it('expect chekIfImageExists full path to be truthy', () => {
    expect(checkIfImageExists(`${imageFullPath}/fjord.jpg`)).toBeTruthy();
  });
  // test checkIfImageExists if the the image is not in full folder
  it('expect chekIfImageExists full path to be falsy', () => {
    expect(checkIfImageExists(`${imageFullPath}/example.jpg`)).toBeFalsy();
  });
  // test checkIfImageExists if the the image is in thumb folder
  it('expect chekIfImageExists thumb path to be truthy', () => {
    expect(
      checkIfImageExists(`${imageThumbPath}/resized-600-600-fjord.jpg`)
    ).toBeTruthy();
  });
  // test checkIfImageExists if the the image is not in thumb folder
  it('expect chekIfImageExists thumb path to be falsy', () => {
    expect(
      checkIfImageExists(`${imageThumbPath}/resized-600-600-example.jpg`)
    ).toBeFalsy();
  });
});
