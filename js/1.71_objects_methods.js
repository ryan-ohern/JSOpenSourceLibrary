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