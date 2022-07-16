import checkIfImageExists from '../../utils/checkImageExistence';
import path from 'path';

const imageFullPath = path.resolve(__dirname, '../../../images/full');
const imageThumbPath = path.resolve(__dirname, '../../../images/thumb');

describe('Test checkImageExistence functions ', () => {
  it('expect chekIfImageExists full path to be truthy', () => {
    expect(checkIfImageExists(`${imageFullPath}/fjord.jpg`)).toBeTruthy();
  });
  it('expect chekIfImageExists full path to be falsy', () => {
    expect(checkIfImageExists(`${imageFullPath}/example.jpg`)).toBeFalsy();
  });
  it('expect chekIfImageExists thumb path to be truthy', () => {
    expect(
      checkIfImageExists(`${imageThumbPath}/resized-600-600-fjord.jpg`)
    ).toBeTruthy();
  });
  it('expect chekIfImageExists thumb path to be falsy', () => {
    expect(
      checkIfImageExists(`${imageThumbPath}/resized-600-600-example.jpg`)
    ).toBeFalsy();
  });
});
