'use strict';

chrome.runtime.onMessage.addListener((url, _sender, sendResponse) => {
    chrome.downloads.download({ url });
    return true;
});
