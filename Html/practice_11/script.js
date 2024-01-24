// script.js

function addItem() {
    var newItemText = document.getElementById("newItem").value.trim();
    if (newItemText !== "") {
        var itemList = document.getElementById("itemList");
        // Check if the item is already in the list
        if (!isItemInList(itemList, newItemText)) {
            var newListItem = document.createElement("li");
            newListItem.appendChild(document.createTextNode(newItemText));
            newListItem.setAttribute("data-name", newItemText); // Using item text as name for simplicity
            itemList.appendChild(newListItem);
            document.getElementById("newItem").value = "";
        } else {
            alert("Item already in the list.");
        }
    }
}

function removeItem() {
    var itemList = document.getElementById("itemList");
    var lastItem = itemList.lastElementChild;
    if (lastItem) {
        var itemName = lastItem.getAttribute("data-name");
        alert("Removing item: " + itemName);
        itemList.removeChild(lastItem);
    }
}

function isItemInList(list, itemText) {
    var items = list.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        if (items[i].textContent.trim() === itemText) {
            return true;
        }
    }
    return false;
}
