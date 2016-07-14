//OBJECT METHODS

var house = {
	streetAddress: 	"4049 Stonybrook Dr.",
	city:			"Nashville",
	state:			"TN",
	age: 			9,
	color: 			"faded yellow",
	size: 			"1400 sq ft", 
	location: function(){
		return this.streetAddress + " " +
		this.city + ", " +
		this.state;
	}
};

console.log(house.location());

//OBJECT LITERALS
//can also pass values to house (if being used as object literal)

var house2 = {
	streetAddress: 	" ",
	city:			" ",
	state:			" ",
	age: 			0,
	color: 			" ",
	size: 			" ", 
	location: function(){
		return this.streetAddress + " " +
		this.city + ", " +
		this.state;
	}
};

var myNewHouse = Object.create(house2)
myNewHouse.streetAddress = "123 Awesome Street Lane";
myNewHouse.city = "Fishers";
myNewHouse.state = "IN";
console.log(myNewHouse.location());