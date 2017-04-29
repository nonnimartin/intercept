var pattern = "<all_urls>";

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.status;
}

function sendRequests() {
    var url = "https://www.resco.net/mobilecrm/support/OfflineHtml.html";
	var getReq = httpGet(url);
	console.log(getReq.toString() + " for url: " + url);
}

function redirect(requestDetails) {
	console.log("Redirecting from " + requestDetails.url)
  return {
    redirectUrl: "https://juche.bandcamp.com"
  };
}

chrome.webRequest.onCompleted.addListener(
  sendRequests,
  {urls:[pattern]},
  []
);