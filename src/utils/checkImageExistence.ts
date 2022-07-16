import fs from 'fs';

// check if the image exists
function checkIfImageExists(path: string): boolean {
  let bool = false;
  try {
    fs.accessSync(path, fs.constants.F_OK);
    bool = true;
  } catch (error) {
    return bool;
  }
  return bool;
}

export default checkIfImageExists;
