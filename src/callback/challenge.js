let XMLHTTPRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
  let xhttp = new XMLHTTPRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = function (event) {
    
  }
}