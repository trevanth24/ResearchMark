console.log("hehe");
var urlList = [];
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

function getAndRestoreURLList(){
    chrome.storage.local.get({urlList:[]},function(data){
        urlList = data.urlList;
        urlList.forEach(function(url){
            addUrl(url);
        });
    });
}

function addURL(url) {
    var newElement = document.createElement('li');
    var newLink = document.createElement('a');
    newLink.textContext = url[0];
    newLink.setAttribute('href', url[0]);
    newLink.setAttribute('target','_blank');
    newElement.appendChild(newLink);
    document.getElementById("myArticles").appendChild(newElement);
}

function addUrlToList(url){
    if(urlList.indexOf(url) === -1){
        //URL is not already in list
        urlList.push(url);
        saveUrlList();
    }
}
function saveUrlList(callback){
    chrome.storage.local.set({urlList},function(){
        if(typeof callback === 'function'){
            callback();
        }
    });
}
