const request = require('request');
const fs = require('fs');

// command line inputs from user
const url = process.argv[2];
const filePath = process.argv[3];

// main body is the request
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    downloadFile(filePath, body);
  }
});

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