"use strict";

var SmallUiGrid = null;

function initSmallUiGrid()
{
    SmallUiGrid = document.getElementById("smallUiGrid");
}

function addPlugin(name)
{
    var pluginInstance = document.createElement("div");
    var iframe = document.createElement("iframe");
    var max   = document.createElement("img");
    var close = document.createElement("img");

    pluginInstance.className = "pluginInstance";
    iframe.src = "plugins/" + name;
    max.src = "core/res/max.svg";
    max.className = "max";
    close.src = "core/res/close.svg";
    close.className = "close";

    pluginInstance.appendChild(max);
    pluginInstance.appendChild(close);
    pluginInstance.appendChild(iframe);

    SmallUiGrid.appendChild(pluginInstance);
}
