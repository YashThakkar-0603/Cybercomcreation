function removeChildExample() {
    // Get the parent element
    var parentElement = document.getElementById("parent");

    // Get the child element to be removed
    var paragraphToRemove = parentElement.querySelector("p");

    // Remove the child element from the parent
    parentElement.removeChild(paragraphToRemove);
}