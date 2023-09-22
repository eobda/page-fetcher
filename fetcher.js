const request = require('request');
/*
It should take two command line arguments:
  * a URL
  * a local file path
*/

const args = process.argv;
console.log('args:', args);
const url = process.argv[2];
console.log('url:', url);
const filePath = process.argv[3];
console.log('filePath:', filePath);

/*
Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
*/