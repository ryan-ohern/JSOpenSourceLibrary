// ARRAYS - DELETE

var listOfMarioCharacters = ["Mario", "Luigi", "Yoshi", "Toad", "Princess", "Bowser"];

// delete Toad from array
delete listOfMarioCharacters[3];

// returns undefined - empty spot in array
console.log(listOfMarioCharacters[3]);

// notice that the array length is still 6
console.log(listOfMarioCharacters.length);


