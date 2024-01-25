// Create an array of people objects
var peopleArray = [
    {
        name: "ABC",
        age: 30,
        occupation: "Engineer"
    },
    {
        name: "DEF",
        age: 25,
        occupation: "Teacher"
    },
    {
        name: "GHE",
        age: 35,
        occupation: "Doctor"
    }
];


for (var i = 0; i < peopleArray.length; i++) {
    var person = peopleArray[i];
    console.log("Person " + (i + 1) + ":");
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("Occupation:", person.occupation);
    console.log("\n");
}
