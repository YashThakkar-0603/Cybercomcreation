function insertHTML() {
    var paragraph = document.getElementById("paragraph");
    paragraph.insertAdjacentHTML('afterend', '<p>This HTML was inserted after the paragraph.</p>');
}