function changeParagraphsColor() {
    // Get elements by tag name
    var paragraphs = document.getElementsByTagName("p");

    // Iterate through the collection and apply styling
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "red";
    }
}