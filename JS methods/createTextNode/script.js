function addTextNodeExample() {
    // Create a text node
    var textNode = document.createTextNode("This is a dynamically created text node. ");

    // Get the parent element
    var parentElement = document.getElementById("parent");

    // Append the text node to the parent
    parentElement.appendChild(textNode);
}