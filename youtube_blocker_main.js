// ==UserScript==
// @name         Youtube
// @namespace    https://github.com/Shelicus
// @version      1.1
// @description  Remove youtube videos
// @author       Shelicus
// @match        https://www.youtube.com/*
// @exclude      *://*.youtube.com/channel/*
// @exclude      *://*.youtube.com/c/*
// @license      Apache 2.0
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    var intvl, intvl2, intvl3, startToAppend = 4000, loop = 5000, loopse = 500;
    //startToAppend -> Time for wait till YouTube classes load;
    setTimeout(appendElement, startToAppend);
    intvl = setInterval(function(){
        removeEndScreens("ytp-ce-element");
    },loop);

    intvl2 = setInterval(function(){
        removevideos("div#items.style-scope.ytd-watch-next-secondary-results-renderer");
    },loopse);

    intvl3 = setInterval(function(){
        removevideosstartseite("contents");
    },loopse);
    //loop = check interval for new End-Screens;

    function appendElement() {
        var el = document.createElement("span");
        el.id = "removed_ess";
        el.style.textAlign = "center";
        document.getElementsByClassName("style-scope ytd-video-secondary-info-renderer")[1].appendChild(el);
    }

    function removeEndScreens(className){
        var elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            if(elements[0].parentNode.removeChild(elements[0])){
                console.log("Found ES");
                 }
            else{
                console.log("Not found ES yet");
            }
        }
    }

    function removevideos(Name){
        var elemento;
        elemento = document.querySelectorAll(Name)
        if(elemento.length > 0){
//             console.log(elemento);
             elemento[0].remove();
        }
     }

    function removevideosstartseite(ClassName){
        var elementozwe;
        elementozwe = document.querySelectorAll('div#contents[class="style-scope ytd-rich-grid-renderer"]')
        if(elementozwe.length > 0){
            elementozwe[0].remove();
         }
    }
})();
