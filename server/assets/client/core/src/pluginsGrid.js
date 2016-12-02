"use strict";

var PluginsGrid = null;

function initPluginsGrid()
{
    PluginsGrid = document.getElementById("pluginsGrid");
    
    PluginsGrid.addEventListener("wheel", onPluginsGridWheel);
    
    for (var i = 0; i < PLUGINS.length; i++)
    {
        pluginsGridAdd(PLUGINS[i]);
    }
}

function onPluginsGridWheel(e)
{
    PluginsGrid.scrollLeft += e.deltaY * 20;
}

function pluginsGridAdd(name)
{
    var img = document.createElement("img");

    img.src = "plugins/" + name + "/icon.svg";
    img.onmousedown = function(e)
    {
        console.log(name);
        addPlugin(name);
        return false;
    };

    PluginsGrid.appendChild(img);
}

