var randomCharacter = [];
var classList = ["Fighter", "Magic User", "Cleric", "Elf", "Dwarf", "Hobbit", "Mystic", "Thief"];
var abilityBonus = [0, -4, -3, -3, -2, -2, -1, -1, -1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3];
var skills = ["Arcane Lore", "Balance", "Bluff", "Cooking", "craft", "Diplomacy", "Disguise", "Engineering", "Escape Artist", "Etiquette (pick a culture)", "First Aid", "Gambling", "Geography", "History", "Intimidation", "Jumping", "Language (pick a language)", "Laws (pick a culture)", "Lip Reading", "Magical Engineering", "Nature Lore", "Navigating", "performance", "Religious Lore", "riding", "Sense Motive", "Swimming", "Tracking"];
var craft = ["Carpentry", "Smithing", "Fletching", "Skinning", "Leatherworking", "Rope Binding", "Tailoring", "Gem Cutting", "Forgery", "Masonry", "Thatching", "Drawing/Painting", "Sculpture"];
var performance = ["Singing", "Playing an instrument", "Dancing", "Acting", "Juggling", "Jesting", "Storytelling", "Poetry"];
var riding = ["Riding - Horse", "Riding - Elephant", "Riding - Dire Wolf", "Riding - Griffon", "Riding - Pegasus", "Riding - Hippogriff", "Riding - Giant Eagle"];
var skillPicked;
var skillHold = [];



function Dice(sides, n) {
  this.sides = sides +1;
  this.n = n;
  this.roll = function () {
     var randomNumber = Math.floor(Math.random() * (this.sides - n) + n);
  return randomNumber;  
	}
}
  

var random6 = new Dice(6, 1);
var random8 = new Dice(8, 1);
var randomCraft = new Dice(13, 1);
var randomPerformance = new Dice(8, 1);
var randomRiding = new Dice(7, 1);


function printCharacter(character) {
  var setCharacter = ["class", "str", "strBonus", "int", "intBonus", "wis", "wisBonus", "con", "conBonus", "dex", "dexBonus", "cha", "chaBonus", "attackBonus", "skill1", "skill2", "skill3", "skill4"]
  for (var i = 0; i < setCharacter.length; i++) {
  	var setClass = document.getElementById(setCharacter[i]);
  	setClass.innerHTML = character[i];
  }
  
}

var button = document.getElementById("createCharacter");

button.onclick = function() {
	
	//find class
	randomCharacter = [];
  	var result = random8.roll();
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
		var statBonus = abilityBonus[stat];
  		randomCharacter.push(stat);
  		randomCharacter.push(statBonus);

  	}
  	//attack bonus is always 1
  	randomCharacter.push(1);

  	//random skills
  	for (var i = 0; i < 4; i++) {
  		skillPicked = skills[i];
  		skillHold.push(skillPicked);
  		console.log(skillPicked);
  		skills.splice(i, 1);
  		if (skillPicked === "craft") {
  			skillPicked = craft[randomCraft.roll()];
  		}
  		if (skillPicked === "performance") {
  			skillPicked = performance[randomPerformance.roll()];
  		}
  		if (skillPicked === "riding" ) {
  			skillPicked = riding[randomRiding.roll()];
  		}
  		
  		randomCharacter.push(skillPicked);
  	}
  	Array.prototype.push.apply(skills, skillHold);
  	skillHold.splice(0)
  	console.log(skills);
  	console.log(randomCharacter);
  	printCharacter(randomCharacter);
};