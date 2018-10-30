console.log("hehe");
var urlArray = [];
document.addEventListener('DOMContentLoaded', function() {
    getAndRestoreURLList();
    document.getElementById("currentPageClick").addEventListener('click', addLink);
});

function addLink() {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
            var currentURL = tabs[0].url;
            var titleURL = tabs[0].title;
            var url = [currentURL,titleURL]
            if(urlList.indexOf(url) === -1){
                    addUrlToList(url);
                    addUrl(url);
            }
        });
}

function getUrlListAndRestoreInDom(){
    chrome.storage.local.get({urlList:[]},function(data){
        urlList = data.urlList;
        urlList.forEach(function(url){
            addUrl(url);
        });
    });
}

funciton
