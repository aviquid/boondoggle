// Copyright 2018 aviquid. All rights reserved.

'use strict';
import urls from './urls';
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