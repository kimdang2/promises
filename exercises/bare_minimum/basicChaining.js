/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var promisification = require('./promisification.js');
// var getStatusCodeAsync = require('./promiseConstructor.js');
// Promise.promisifyAll(fs);
const writeFile = Promise.promisify(fs.writeFile);
const readFile = Promise.promisify(fs.readFile);



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return readFile(readFilePath).then( (data) => {
    if (data === undefined) { throw new Error('No data'); }
    else {
      let text = data.toString().split('\n');
      let user =  text[0];
      return user;
    }
  } )
  .then( (user) => {
    let profile = promisification.getGitHubProfileAsync(user);
    return profile;
  } )
  .then( (profile) => {
    return writeFile(writeFilePath, JSON.stringify(profile));
  } )

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
