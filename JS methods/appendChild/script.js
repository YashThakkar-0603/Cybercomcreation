function appendChildExample() {
    // Create a new <p> element
    var paragraph = document.createElement("p");

    // Set text content for the new element
    paragraph.textContent = "New paragraph element. ";

    // Get the parent element
    var parentElement = document.getElementById("parent");

    // Append the new element to the parent
    parentElement.appendChild(paragraph);
}