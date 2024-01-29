function getAttributeExample() {
    var paragraph = document.getElementById("paragraph");
    var dataInfoValue = paragraph.getAttribute("data-info");
    alert("Attribute value: " + dataInfoValue);
}