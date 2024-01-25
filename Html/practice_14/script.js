var product = {
    name: "apple iphone",
    price: 900 , 
};


function calculateTotalCost(product, quantity) {
    if (quantity < 0) {
        console.log("Quantity cannot be negative.");
        return 0;
    }

    var totalCost = product.price * quantity;
    return totalCost;
}


var specifiedQuantity = 8;
var totalCost = calculateTotalCost(product, specifiedQuantity);


console.log("Product:", product.name);
console.log("Price per unit:", product.price);
console.log("Specified Quantity:", specifiedQuantity);
console.log("Total Cost:", totalCost);
