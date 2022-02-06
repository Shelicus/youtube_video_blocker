// ==UserScript==
// @name         Youtube
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove youtube videos
// @author       Shelicus
// @match        https://www.youtube.com/*
// @exclude      https://www.youtube.com/results?*
// @license      Apache-2.0
// @grant        none
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
        removevideos("items");
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

    function removevideos(IDName){
        var elemento;
        if(elemento = document.getElementById(IDName)){
//             console.log(elemento);
             elemento.remove();
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
