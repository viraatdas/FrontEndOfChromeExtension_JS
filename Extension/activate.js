var currentUrl;

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
function(tabs){
    	currentUrl = tabs[0].url;



	postURLfunction();

	}
);
function postURLfunction(){
	//run the (url-using) function here
	chrome.extension.getBackgroundPage().console.log(currentUrl);

	document.getElementById("Title1").innerHTML = currentUrl;
  chrome.extension.getBackgroundPage().console.log("localhost:5000?url=" + currentUrl);
  fetch("http://localhost:5000/?url=" + currentUrl).then(function(response){
    return response.json;
  }).then(function(json){
    console.log(json);
  });
s
  /*var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     chrome.extension.getBackgroundPage().console.log(this.responseText);
    }
  };
  xhttp.open("GET", "http://127.0.0.1:5000/?url=" + encodeURIComponent(currentUrl), true);
  xhttp.send();
    
    let result = xhttp.response();*/
    
    /*$.get("http://127.0.0.1:5000/?url=" + encodeURIComponent(currentUrl), function(response) {
        console.log(response);
    });*/
    
/*    let response = await axios.get("http://127.0.0.1:5000/?url=" + encodeURIComponent(currentUrl));
    console.log(response);*/
}

/*
  var google = require('google');
  chrome.extension.getBackgroundPage().console.log(google);
  google.resultsPerPage = 25;
  var nextCounter = 0;

  google("viraat das", function (err, res){
    chrome.extension.getBackgroundPage().console.log("hi");
    if (err) console.error(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      chrome.extension.getBackgroundPage().console.log(link.title + ' - ' + link.href);
      chrome.extension.getBackgroundPage().console.log(link.description + "\n");



    }

    if (nextCounter < 4) {
      nextCounter += 1;
      if (res.next) res.next();
    }*/
