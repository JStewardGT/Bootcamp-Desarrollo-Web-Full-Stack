const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) return console.error(err);

  const numberOfNewLines = data.split('\n').length - 1;

  console.log(numberOfNewLines);
});
