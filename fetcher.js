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

// main body is the request
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
  // check if file exists
    if (checkForFile(filePath)) {
      // prompt user to enter Y/N + enter
      // if user enters Y + enter, proceed with writing file
      // if user enters N, exit the app
      
    } else {
      // proceed with writing file
      downloadFile(filePath, body);
    }
  }
});

// checks if file at specified path already exists
const checkForFile = (path) => {
  fs.access(path, fs.constants.F_OK, (err) => {
    // if file does not exist it will return an error
    if (err) return false;

    // if no error is returned then the file exists
    return true;
  });
};

// writes file to specified path and logs confirmation message to the console
const downloadFile = (path, file) => {
  fs.writeFile(path, file, 'utf8', (err) => {
    if (err) {
      console.log('error:', err);
    }
    
    // 1 char = 1 byte
    console.log(`Downloaded and saved ${file.length} bytes to ${path}.`);
 });
};