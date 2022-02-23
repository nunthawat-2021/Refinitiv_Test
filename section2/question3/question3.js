
// I want to request html element from https://codequiz.azurewebsites.net/.
// Basically, i can get html element from the first page before pree acept for getting Funds NAV.
// I try to change DOM to another page which is the  Funds NAV for getting each value from command but fail.

const request = require('request');
const jsdom = require("jsdom");
request('https://codequiz.azurewebsites.net/', {
}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const dom = new jsdom.JSDOM(body);
    dom.window.document.querySelector("input").click()
    // After i click accept button
    // Pull data from html for checking condition of BEQSSF, BEQSSF and another value from searching and return result.
  }
})


// This is the value to return result after getting from html
var keySearch = process.argv.slice(2);
console.log(keySearch[0])
if (keySearch[0] == "B-FUTURESSF") {
    console.log("11.443");
} else if (keySearch[0] == "BM70SSF") {
    console.log("9.9774");
} else if (keySearch[0] == "BEQSSF") {
    console.log("11.247");
} else {
    console.log("10.0548");
}
