

chrome.contextMenus.create({
    title: "wiki",
    contexts:["selection"],

    onclick:myfunction

});
function myfunction(data){
    chrome.tabs.create({
        url:"https://en.wikipedia.org/wiki/"+data.selectionText
    })

}