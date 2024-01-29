function replaceChildExample() {
    // Get the parent element
    var parentElement = document.getElementById("parent");

    // Create two new <p> elements
    var newParagraph1 = document.createElement("p");
    newParagraph1.textContent = "First paragraph element. ";

    var newParagraph2 = document.createElement("p");
    newParagraph2.textContent = "Second paragraph element. ";

    // Get the child element to be replaced (in this case, the existing <span>)
    var spanToReplace = parentElement.querySelector("span");

    // Replace the child element (span) with the new elements (paragraphs)
    parentElement.replaceChild(newParagraph1, spanToReplace);
    parentElement.appendChild(newParagraph2);
}