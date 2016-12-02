"use strict";

var SmallUiGrid = null;

function initSmallUiGrid()
{
    SmallUiGrid = document.getElementById("smallUiGrid");
}

function addPlugin(name)
{
    var pluginContainer = document.createElement("div");
    var iframe = document.createElement("iframe");
    var min    = document.createElement("img");
    var max    = document.createElement("img");
    var close  = document.createElement("img");

    pluginContainer.className = "pluginContainer";
    
    iframe.src = "plugins/" + name + "/";

    min.src = "core/res/min.svg";
    min.className = "min";
    min.onclick = function(e)
    {
        minimize();
        return false;
    };
    
    max.src = "core/res/max.svg";
    max.className = "max";
    max.onclick = function(e)
    {
        maximize(pluginContainer);
        return false;
    };

    close.src = "core/res/close.svg";
    close.className = "close";
    close.onclick = function(e)
    {
        SmallUiGrid.removeChild(pluginContainer);
        return false;
    };

    pluginContainer.appendChild(min);
    pluginContainer.appendChild(max);
    pluginContainer.appendChild(close);
    pluginContainer.appendChild(iframe);

    SmallUiGrid.appendChild(pluginContainer);
}
