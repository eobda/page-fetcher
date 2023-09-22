const request = require('request');
/*
It should take two command line arguments:
  * a URL
  * a local file path
*/

const url = process.argv[2];
const filePath = process.argv[3];

// format given is: url ends in / + file path begins with ./
console.log('testing filePath.slice:', url + filePath.slice(2));

request(url + filePath.slice(2), (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body length:', body.length, '(1 character is equal to 1 byte)');
});

/*
Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
*/