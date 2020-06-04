/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */
var Promise = require('bluebird')
var fs = require('fs');
const readFile = Promise.promisify(fs.readFile);
const writeFile = Promise.promisify(fs.writeFile);

var combineFirstLineOfManyFiles = function(filePaths, writePath) {
 // TODO
  let firstLinesOfFiles = [];
  let promise1 = new Promise( (resolve, reject) => {
    filePaths.forEach( filePath => {
      fs.readFile(filePath, (err, data) => {
        if (err) { reject(err); }
        else {
          let text = data.toString().split('\n');
          let firstLine = text[0];
          console.log('text: ', firstLine)
          firstLinesOfFiles.push(resolve(text[0]));
        }
      })
    });
  } );
  // join each first line into a new file
  promise2 = new Promise( (resolve, reject) => {
    // writeFile()

  } )

  return Promise.all(promise1, promise2).then( values => {
    //step 4
  })
};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};