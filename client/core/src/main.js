
var PluginsGrid = null;

function init()
{
    PluginsGrid = document.getElementById("pluginsGrid");
    PluginsGrid.addEventListener("wheel", onPluginsGridWheel);
}

function onPluginsGridWheel(e)
{
    PluginsGrid.scrollLeft += e.deltaY * 20;
}
