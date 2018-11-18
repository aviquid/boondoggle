// Copyright 2018 aviquid. All rights reserved.

'use strict';
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if(sender.tab.active) {
    chrome.tabs.remove(sender.tab.id, function () {
      console.log("closed");
    })
  }
})