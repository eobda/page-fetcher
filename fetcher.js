const request = require('request');
/*
It should take two command line arguments:
  * a URL
  * a local file path
*/

const url = process.argv[2];
const filePath = process.argv[3];

console.log('testing filePath.slice:', url + filePath.slice(1));

// request(url + filePath.slice(1), (error, response, body) => {
//   console.log('error:', error);
//   console.log('statusCode:', response && response.statusCode);
//   console.log('body:', body);
// });

/*
Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
*/