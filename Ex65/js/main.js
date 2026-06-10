function addNode()
{
    let content = document.getElementById("txtContent").value;
    let pos = parseInt(document.getElementById("txtAddPos").value);

    let ul = document.getElementById("webnode");

    let li = document.createElement("li");
    li.innerHTML = content;

    let items = ul.getElementsByTagName("li");

    if(pos >= items.length)
    {
        ul.appendChild(li);
    }
    else
    {
        ul.insertBefore(li, items[pos]);
    }
}
function removeNode()
{
    let pos = parseInt(document.getElementById("txtRemovePos").value);

    let ul = document.getElementById("webnode");

    let items = ul.getElementsByTagName("li");

    if(pos >= 0 && pos < items.length)
    {
        ul.removeChild(items[pos]);
    }
}
function modifyNode()
{
    let pos = parseInt(document.getElementById("txtModifyPos").value);

    let newContent =
    document.getElementById("txtNewContent").value;

    let ul = document.getElementById("webnode");

    let items = ul.getElementsByTagName("li");

    if(pos >= 0 && pos < items.length)
    {
        let newLi = document.createElement("li");

        newLi.innerHTML = newContent;

        ul.replaceChild(newLi, items[pos]);
    }
}