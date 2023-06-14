// Copyright 2018 aviquid. All rights reserved.

var urls = [
    "*://*.facebook.com/*", 
    "*://*.instagram.com/*",  
    "*://*.twitter.com/*", 
    "*://*.hotstar.com/*"
];

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if(sender.frameId) {
    console.log("iframe detected");
  } else {
    chrome.tabs.remove(sender.tab.id, function () {
      console.log("closed");
    })
  }
});
chrome.webRequest.onBeforeRequest.addListener(function (details) {
  return {cancel: true};
}, {
  urls,
  types: ["sub_frame", "stylesheet", "script"]
},["blocking"]);
