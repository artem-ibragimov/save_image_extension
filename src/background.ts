chrome.runtime.onMessage.addListener(
   (url: string, _sender: object, sendResponse: (res: any) => void) => {
   chrome.downloads.download({ url });
   return true;
});