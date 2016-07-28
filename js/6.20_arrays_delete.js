// ARRAYS - DELETE

var listOfMarioCharacters = ["Mario", "Luigi", "Yoshi", "Toad", "Princess", "Bowser"];

// delete Toad from array
delete listOfMarioCharacters[3];

// returns undefined - empty spot in array
console.log(listOfMarioCharacters[3]);

// notice that the array length is still 6
console.log(listOfMarioCharacters.length);


// SPLICE

var listOfNumbers = [1,2,3,5,8,13,21];

// select index value & number of items to remove starting on that position
// this locates index 5 (13) and removes one array item
listOfNumbers.splice(5, 1);

console.log(listOfNumbers);