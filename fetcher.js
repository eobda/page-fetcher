const request = require('request');
const fs = require("fs");

/*
It should take two command line arguments:
  * a URL
  * a local file path
*/

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    // need to download file to file path!!!
    
    // 1 char = 1 byte
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}.`);
  }
});