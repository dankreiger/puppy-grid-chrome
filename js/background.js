function executeScripts(tabId, injectDetailsArray)
{
    function createCallback(tabId, injectDetails, innerCallback) {
        return function () {
            chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
        };
    }

    var callback = null;

    for (var i = injectDetailsArray.length - 1; i >= 0; --i)
        callback = createCallback(tabId, injectDetailsArray[i], callback);

    if (callback !== null)
        callback();   // execute outermost function
}

var clicked = false;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  clicked = !clicked
  executeScripts(null, [
    { file: "js/jquery-3.3.1.min.js" }, 
    { file: clicked ? 'js/insert.js' : 'js/remove.js' }
  ]);
});