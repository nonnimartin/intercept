var pattern = "<all_urls>";

function redirect(requestDetails) {
	console.log("Redirecting from " + requestDetails.url)
  return {
    redirectUrl: "https://juche.bandcamp.com"
  };
}

chrome.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern]},
  ["blocking"]
);