//OBJECT LITERALS & INHERITANCE
//can also pass values to house (if being used as object literal)

var house = {
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

var myNewHouse = Object.create(house)
myNewHouse.streetAddress = "123 Awesome Street Lane";
myNewHouse.city = "Fishers";
myNewHouse.state = "IN";
myNewHouse.age = 10;
console.log(myNewHouse.location());