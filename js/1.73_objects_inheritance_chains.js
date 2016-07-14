var person = {
	firstName: 		" ",
	lastName: 		" ",
	age: 			0 
}

var dad = Object.create(person);
dad.firstName = "Danny";
dad.lastName = "Tanner";
dad.age = 45;
console.log(dad);

//create new instance of child from dad
var child = Object.create(dad);
child.firstName = "Michelle";
child.age = 4;
//don't need to pass lastName
console.log(child.lastName);