const request = require('request');
/*
It should take two command line arguments:
  * a URL
  * a local file path
*/

const url = process.argv[2];
const filePath = process.argv[3];

// format given is: url ends in / + file path begins with ./
request(url + filePath.slice(2), (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    // 1 char = 1 byte
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}.`);
  }
});