function highlightElements() {
           
    var highlightedElements = document.getElementsByClassName("highlight");

    
    for (var i = 0; i < highlightedElements.length; i++) {
        highlightedElements[i].style.color = "aqua";
    }
}