function combineObjects(obj1, obj2) {
    
    if (!obj1 || !obj2 || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        console.error("Invalid input. Please provide valid objects.");
        return {};
    }

    
    var combinedObject = {
        ...obj1, 
        ...obj2  
    };

    return combinedObject;
}


var person1 = {
    name: "John Doe",
    age: 25
};

var person2 = {
    address: "123 Main Street",
    occupation: "Engineer"
};

var combinedProperties = combineObjects(person1, person2);

console.log("Person 1:", person1);
console.log("Person 2:", person2);
console.log("Combined Properties:", combinedProperties);
