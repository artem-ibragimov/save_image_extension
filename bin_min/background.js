"use strict";chrome.runtime.onMessage.addListener(((e,o,d)=>(chrome.downloads.download({url:e}),!0)));
