"use strict";

var BigUi = null;

var SmallContainer = null;
var Iframe = null;

function initBigUi()
{
    BigUi = document.getElementById("bigUi").children[0];
}

function onResize()
{
    if (Iframe === null)
        return;

    Iframe.style.width = BigUi.offsetWidth + "px";
    Iframe.style.height = BigUi.offsetHeight + "px";
}

function maximize(smallContainer)
{
    if (SmallContainer !== null)
        minimize();
    
    SmallContainer = smallContainer;

    Iframe = SmallContainer.getElementsByTagName("iframe")[0];
    Iframe.style.position = "fixed";
    Iframe.style.width = BigUi.offsetWidth + "px";
    Iframe.style.height = BigUi.offsetHeight + "px";
    Iframe.style.left = BigUi.offsetLeft + "px";
    Iframe.style.top = BigUi.offsetTop + "px";

    SmallContainer.className = "pluginContainer empty";
}

function minimize()
{
    if (SmallContainer === null)
        return;

    Iframe.style.position = "static";
    Iframe.style.width = "100%";
    Iframe.style.height = "100%";
    
    SmallContainer.className = "pluginContainer";

    Iframe = null;
    SmallContainer = null;
}
