import fs      from 'fs';
import isImage from 'is-image';

const githubDirectory = 'https://github.com/Kamicast/background-image-set/raw/master/images/';

(function() {
  // find all images in "images" directory, save each one to a JSON file:
  let fileList = fs.readdirSync('./images');
  fileList.filter(isImage); // filter out any files that are not images...
  fileList = fileList.map(image => {
    return githubDirectory + image;
  });
  fs.writeFileSync('images.json', JSON.stringify(fileList));
})();
