//script.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	allNames = femaleNames.concat(maleNames);
	newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
var a = allNames.push(newName)
}
console.log(allNames);