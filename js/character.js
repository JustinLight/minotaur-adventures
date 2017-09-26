var randomCharacter = [];
var classList = ["Fighting Man", "Magic User", "Cleric", "Elf", "Dwarf", "Hobbit"]



function Dice(sides, n) {
  this.sides = sides +1;
  this.n = n;
  this.roll = function () {
     var randomNumber = Math.floor(Math.random() * (this.sides - n) + n);
  return randomNumber;  
	}
}
  

var random6 = new Dice(6, 1);


function printCharacter(character) {
  var setCharacter = ["class", "str", "int", "wis", "con", "dex", "cha"]
  for (var i = 0; i < setCharacter.length; i++) {
  	var setClass = document.getElementById(setCharacter[i]);
  	setClass.innerHTML = character[i];
  }
  
}

var button = document.getElementById("createCharacter");

button.onclick = function() {
	
	//find class
	randomCharacter = [];
  	var result = random6.roll();
  	randomCharacter.push(classList[result - 1])
  	//find stats
  	for (i=0; i < 6; i++) {
  		var stat = [];
  		for (var x = 0; x < 3; x++) {
  			stat.push(random6.roll())
  		}
  		stat = stat.reduce(
  			( acc, cur ) => acc + cur,
  			0
		);
  		randomCharacter.push(stat);

  	}

  	printCharacter(randomCharacter);
};