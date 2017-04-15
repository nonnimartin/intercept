var pattern = "<all_urls>";

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function sendRequests() {

	var getReq = httpGet("https://www.resco.net/mobilecrm/support/OfflineHtml.html");
	console.log(getReq);
}

function redirect(requestDetails) {
	console.log("Redirecting from " + requestDetails.url)
  return {
    redirectUrl: "https://juche.bandcamp.com"
  };
}

chrome.webRequest.onBeforeRequest.addListener(
  sendRequests,
  {urls:[pattern]},
  ["blocking"]
);