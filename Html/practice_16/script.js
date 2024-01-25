function extractNameAndAge(originalObject) {
    
    if (!originalObject || typeof originalObject !== 'object') {
        console.error("Invalid input. Please provide a valid object.");
        return {};
    }

   
    var resultObject = {
        name: originalObject.name,
       
    };

    return resultObject;
}


var person = {
    name: "John Doe",
    age: 25,
    address: "123 Main Street"
};

var extractedProperties = extractNameAndAge(person);

console.log("Original Object:", person);
console.log("Extracted Properties:", extractedProperties);
