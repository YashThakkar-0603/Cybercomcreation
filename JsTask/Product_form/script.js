// Your JavaScript code goes here
function validateAndSubmit() {
    const productTitle = document.getElementById('productTitle').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
  
    if (!validateProductTitle(productTitle) || !validatePrice(price) || !validateDescription(description) || !validateCategory(category)) {
      return;
    }
  
    const product = {
      title: productTitle,
      price: parseFloat(price),
      description,
      category
    };
  
    // Add or update product in the table
    const tableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow(tableBody.rows.length);
    const keys = Object.keys(product);
  
    keys.forEach((key, index) => {
      const cell = newRow.insertCell(index);
      cell.textContent = product[key];
    });
  
    // Add action buttons to the last cell
    const actionCell = newRow.insertCell(keys.length);
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
      editProduct(newRow);
    };
    actionCell.appendChild(editButton);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      deleteProduct(newRow);
    };
    actionCell.appendChild(deleteButton);
  
    // Clear the form
    document.getElementById('productForm').reset();
  }
  
  function validateProductTitle(title) {
    if (title.length < 2 || title.length > 50) {
      alert('Product Title must be between 2 and 50 characters.');
      return false;
    }
    return true;
  }
  
  function validatePrice(price) {
    if (isNaN(price) || parseFloat(price) <= 0) {
      alert('Price must be a positive number.');
      return false;
    }
    return true;
  }
  
  function validateDescription(description) {
    if (description.length < 5 || description.length > 500) {
      alert('Description must be between 5 and 500 characters.');
      return false;
    }
    return true;
  }
  
  function validateCategory(category) {
    if (category === "") {
      alert('Please select a category.');
      return false;
    }
    return true;
  }
  
  function editProduct(row) {
    // Populate form with values from the selected row for editing
    const form = document.getElementById('productForm');
    const cells = row.cells;
  
    form.elements['productTitle'].value = cells[0].textContent;
    form.elements['price'].value = parseFloat(cells[1].textContent);
    form.elements['description'].value = cells[2].textContent;
    form.elements['category'].value = cells[3].textContent;
  
    // Remove the row from the table
    row.parentNode.removeChild(row);
  }
  
  function deleteProduct(row) {
    // Remove the row from the table
    row.parentNode.removeChild(row);
  }
  