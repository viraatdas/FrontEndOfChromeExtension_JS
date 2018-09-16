var currentUrl;

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
function(tabs){
    	currentUrl = tabs[0].url;
	//sendURLfunction();
	receiveDataFunction();
	}
);
function sendURLfunction() {
	//run the (url-using) function here
	chrome.extension.getBackgroundPage().console.log(currentUrl);

	document.getElementById("Title1").innerHTML = currentUrl;
  chrome.extension.getBackgroundPage().console.log("localhost:5000?url=" + currentUrl);
  //fetch("localhost:5000/?url=" + currentUrl);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     chrome.extension.getBackgroundPage().console.log(this.responseText);
    }
  };
  xhttp.open("GET", "http://127.0.0.1:5000/?url=" + encodeURIComponent(currentUrl), true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    recieveDataFunction(xhttp.responseText);
  }
};
}
function receiveDataFunction(response) {
    //var data = JSON.parse(response);
    var data = {num:6,s:["Test1","Test2","Test3","Test4","Test5","Test6"],l:["https://www.w3schools.com","https://www.w3schools.com","https://www.w3schools.com"]};
    document.getElementById("theScore").innerHTML = data.num;
    for(i = 0;i < Math.min(data.s.length,10);i++) {
	document.getElementById("s"+i).innerHTML = data.s[i];
    }
    for(i = 0;i < Math.min(data.l.length,5);i++) {
	document.getElementById("s"+(2*i+1)).href = data.l[i];
	chrome.extension.getBackgroundPage().console.log(2*i+1);
    }
}