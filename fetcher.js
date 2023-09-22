const request = require('request');
const fs = require('fs');
const readline = require('readline');

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
    // check if file already exists - if exists, prompt user to enter Y + enter to overwrite file, otherwise skp and exit the app
    fs.access(filePath, fs.constants.F_OK, (err) => {
      console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
    });

    downloadFile(filePath, body);
  }
});

const downloadFile = function (path, file) {
  fs.writeFile(path, file, 'utf8', (err) => {
    if (err) {
      console.log('error:', err);
    }
    
    // 1 char = 1 byte
    console.log(`Downloaded and saved ${file.length} bytes to ${path}.`);
 });
};