const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const fileExtension = '.' + process.argv[3];

fs.readdir(directoryPath, (err, files) => {
  if (err) return console.error(err);

  files
    .filter(file => path.extname(file) === fileExtension)
    .forEach(file => console.log(file));
});
