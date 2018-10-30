_________________________________________________________________________________________
//Resources:
//https://stackoverflow.com/questions/41284528/completely-lost-on-how-to-save-extension-popup-window-content
//https://stackoverflow.com/questions/4689344/how-can-i-add-href-attribute-to-a-link-dynamically-using-javascript
//





console.log("hehe");
function returnTitle() {

}

var currentClickbtn = document.getElementById("currentPageClick");
currentClickbtn.addEventListener("click", function() {
    let currentURL;
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs){
            currentURL = tabs[0].url;
   }



);



})

var clickbtn = document.getElementById("ClickMe");
clickbtn.addEventListener( "click", function() {
    var li = document.createElement("li");
    var inputURL = document.getElementById("newArticle").value;
    var textNode = document.createTextNode(inputURL);
    li.appendChild(textNode);
    if (inputURL === '') {
        alert("Please enter a URL");
    } else {
        document.getElementById("myArticles").appendChild(li);
    }
    document.getElementById("newArticle").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);x
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
  }
}


});

_________________________________________________________________________________________
//Backup v2
console.log("hehe");
function returnTitle() {

}

var currentURL;
var titleURL;
var currentClickbtn = document.getElementById("currentPageClick");
currentClickbtn.addEventListener("click", function() {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs){
            currentURL = tabs[0].url;
            titleURL = tabs[0].title;
            console.log(titleURL);

   }
);
    var li = document.createElement("li");
    console.log(li);
    var textNode = document.createTextNode(titleURL);
    li.appendChild(textNode);
    document.getElementById("myArticles").appendChild(li);
    console.log(li);
    // li.href = currentURL;
    // console.log(li);
    // if (inputURL === "") {
    //     //alert("Please enter a URL");
    //     document.currentURL.value = "";
    // } else {

    // }
    // //document.currentURL.value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
   }
}
})

var clickbtn = document.getElementById("ClickMe");
clickbtn.addEventListener( "click", function() {
    var li = document.createElement("li");
    var inputURL = document.getElementById("newArticle").value;
    console.log(inputURL);
    var textNode = document.createTextNode(inputURL);
    li.appendChild(textNode);
    console.log(li);
    if (inputURL === '') {
        alert("Please enter a URL");
    } else {
        document.getElementById("myArticles").appendChild(li);
    }
    document.getElementById("newArticle").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
  }
}


});

