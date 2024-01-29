
function createElementExample() {
    // Create a new <p> element
    var newParagraph = document.createElement("p");

    // Set text content for the new element
    newParagraph.textContent = "This is a dynamically created paragraph.";

    // Append the new element to the body
    document.body.appendChild(newParagraph);
}