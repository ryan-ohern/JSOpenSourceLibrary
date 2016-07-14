//ARRAYS

var randomNumbers = [1, 43, 87, 444, 21];
console.log(randomNumbers);

var animals = ["dog", "cat", "fish", "turtle"];
console.log(animals);

//accessing an item inside an ARRAYS
//NOTE: arrays start with an index of 0
console.log(animals[2]);

//array lengths
console.log(animals.length);

//adding to end of an array with "push"
animals.push("dolphin");
console.log(animals);

//deleting from end of an array with "pop"
animals.pop();
console.log(animals);

//deleting a specific item from an array
//1st values tells which index to access, 2nd value tells how many to remove or add
var cities = ["Boston", "New York", "Nashville", "Kansas City"];
cities.splice(2, 1);
console.log(cities);
