console.log("hehe");
var urlList = [];
document.addEventListener('DOMContentLoaded', function() {
    getAndRestoreURLList();
    document.getElementById("currentPageClick").addEventListener('click', addLink);
    document.getElementById("removeCurrentPage").addEventListener('click',removeLink)
});

function addLink() {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
            var currentURL = tabs[0].url;
            var titleURL = tabs[0].title;
            var url = [currentURL,titleURL];
            if(urlList.indexOf(url) === -1){
                    addUrlToList(url);
                    addUrl(url);
            }
        });
}

function removeLink() {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
            var currentURL = tabs[0].url;
            var titleURL = tabs[0].title;
            var url = [currentURL,titleURL];
            if(!(urlList.indexOf(url) === -1)){
                    removeUrlFromList(url);
                    removeUrl(url);
            }
        });

}

function checkArray(url){
    for (var x = 0; x<urlList; x++) {
        if (urlList[x] instanceof Array && urlList[x][0] === url[0]) {
            return true;
        }
        else {
            return false;
        }
    }
}


function getAndRestoreURLList(){
    chrome.storage.local.get({urlList:[]},function(data){
        urlList = data.urlList;
        urlList.forEach(function(url){
            addUrl(url);
        });
    });
}

function addUrl(url) {
    var newElement = document.createElement('li');
    var newLink = document.createElement('a');
    var textNode = document.createTextNode(url[1]);
    newLink.textContext = url[0];
    newLink.setAttribute('href', url[0]);
    newLink.setAttribute('target','_blank');
    newElement.appendChild(newLink);
    newLink.appendChild(textNode)
    document.getElementById("myArticles").appendChild(newElement);
}

function removeUrl(url) {

}

function addUrlToList(url){
    if(urlList.indexOf(url) === -1){
        //URL is not already in list
        urlList.push(url);
        saveUrlList();
    }
}
function removeUrlFromList() {
    if(!(urlList.indexOf(url) === -1)){
        //URL is not already in list
        urlList.pop(url);
        saveUrlList();
    }
}

function saveUrlList(callback){
    chrome.storage.local.set({urlList},function(){
        if(typeof callback === 'function'){
            console.log("yes");
            callback();
        }
    });
}





// console.log("hehe");
// function returnTitle() {

// }

// var currentURL;
// var titleURL;
// var currentClickbtn = document.getElementById("currentPageClick");
// currentClickbtn.addEventListener("click", function() {
//     chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
//         function(tabs){
//             currentURL = tabs[0].url;
//             titleURL = tabs[0].title;
//             console.log(titleURL);

//    }
// );
//     var html = '<li><a href=' + currentURL + " target='_blank'>" + titleURL + '</a><br/></li>';

//     // var li = document.createElement("li");
//     // console.log(li);
//     // var textNode = document.createTextNode(titleURL);
//     // li.appendChild(textNode);
//     // document.getElementById("myArticles").appendChild(li);
//     // console.log(li);
//     // li.href = currentURL;
//     // console.log(li);
//     // if (inputURL === "") {
//     //     //alert("Please enter a URL");
//     //     document.currentURL.value = "";
//     // } else {

//     // }
//     // //document.currentURL.value = "";
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
//     var close = document.getElementsByClassName("close");
//     var i;
//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function() {
//             var div = this.parentElement;
//             div.style.display = "none";
//    }
// }
// })

// var clickbtn = document.getElementById("ClickMe");
// clickbtn.addEventListener( "click", function() {
//     var li = document.createElement("li");
//     var inputURL = document.getElementById("newArticle").value;
//     console.log(inputURL);
//     var textNode = document.createTextNode(inputURL);
//     li.appendChild(textNode);
//     console.log(li);
//     if (inputURL === '') {
//         alert("Please enter a URL");
//     } else {
//         document.getElementById("myArticles").appendChild(li);
//     }
//     document.getElementById("newArticle").value = "";

//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
//     var close = document.getElementsByClassName("close");
//     var i;
//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function() {
//             var div = this.parentElement;
//             div.style.display = "none";
//   }
// }


// });
//_________________________________________________________________________________
//
