var randomCharacter = [];
var classList = ["Fighter", "Magic User", "Cleric", "Elf", "Dwarf", "Halfling", "Mystic", "Thief"];
var classIndex;
var abilityBonus = [0, -4, -3, -3, -2, -2, -1, -1, -1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3];
var skills = ["Arcane Lore", "Balance", "Bluff", "Cooking", "craft", "Diplomacy", "Disguise", "Engineering", "Escape Artist", "Etiquette (pick a culture)", "First Aid", "Gambling", "Geography", "History", "Intimidation", "Jumping", "Language (pick a language)", "Laws (pick a culture)", "Lip Reading", "Magical Engineering", "Nature Lore", "Navigating", "performance", "Religious Lore", "riding", "Sense Motive", "Swimming", "Tracking"];
var craft = ["Carpentry", "Smithing", "Fletching", "Skinning", "Leatherworking", "Rope Binding", "Tailoring", "Gem Cutting", "Forgery", "Masonry", "Thatching", "Drawing/Painting", "Sculpture"];
var performance = ["Singing", "Playing an instrument", "Dancing", "Acting", "Juggling", "Jesting", "Storytelling", "Poetry"];
var riding = ["Riding - Horse", "Riding - Elephant", "Riding - Dire Wolf", "Riding - Griffon", "Riding - Pegasus", "Riding - Hippogriff", "Riding - Giant Eagle"];
var picked;
var hold = [];
var weapons = [["Hand Axe", "Blackjack", "Club", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Lance", "Mace", "Net", "Spear", "Bastard Sword", "Normal Sword", "Short Sword", "Trident", "Whip", "Battle Axe", "Halberd", "Pike", "Poleaxe", "Staff", "Two-Handed Sword", "Horned Shield", "Knife Shield", "Sword Shield", "Tusked Shield", "Large Blowgun", "Small Blowgun", "Bolas", "Long Bow", "Short Bow", "Heavy Crossbow", "Light Crossbow", "Pistol", "Sling", "Smoothbore"],
				["Dagger", "Net", "Whip", "Staff", "Large Blowgun", "Small Blowgun", "Pistol", "Sling"],
				["Blackjack", "Club", "Throwing Hammer", "War Hammer", "Mace", "Staff", "Sling"],
				["Hand Axe", "Blackjack", "Club", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Lance", "Mace", "Net", "Spear", "Bastard Sword", "Normal Sword", "Short Sword", "Trident", "Whip", "Battle Axe", "Halberd", "Pike", "Poleaxe", "Staff", "Two-Handed Sword", "Horned Shield", "Knife Shield", "Sword Shield", "Tusked Shield", "Large Blowgun", "Small Blowgun", "Bolas", "Long Bow", "Short Bow", "Heavy Crossbow", "Light Crossbow", "Pistol", "Sling", "Smoothbore"],
				["Hand Axe", "Blackjack", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Mace", "Net", "Normal Sword", "Short Sword", "Trident", "Whip", "Battle Axe", "Staff", "Horned Shield", "Knife Shield", "Sword Shield", "Large Blowgun", "Small Blowgun", "Bolas", "Short Bow", "Light Crossbow", "Pistol", "Sling"],
				["Hand Axe", "Blackjack", "Cestus", "Dagger", "Short Sword", "Horned Shield", "Knife Shield", "Sword Bow", "Light Crossbow", "Pistol"],
				["Hand Axe", "Blackjack", "Club", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Lance", "Mace", "Net", "Spear", "Bastard Sword", "Normal Sword", "Short Sword", "Trident", "Whip", "Battle Axe", "Halberd", "Pike", "Poleaxe", "Staff", "Two-Handed Sword", "Large Blowgun", "Small Blowgun", "Bolas", "Long Bow", "Short Bow", "Heavy Crossbow", "Light Crossbow", "Pistol", "Sling", "Smoothbore"],
				["Hand Axe", "Blackjack", "Club", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Lance", "Mace", "Net", "Spear", "Bastard Sword", "Normal Sword", "Short Sword", "Trident", "Whip", "Large Blowgun", "Small Blowgun", "Bolas", "Long Bow", "Short Bow", "Heavy Crossbow", "Light Crossbow", "Pistol", "Sling"]];
var arrayLength;

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
var randomArray = new Dice(arrayLength, 1);


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
  	classIndex = result-1;
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
  		
  		arrayLength = Number(skills.length);
		var rollResult = randomArray.roll()
  		picked = skills[rollResult];
  		hold.push(picked);
  		skills.splice(i, 1);
  		if (picked === "craft") {
  			picked = craft[randomCraft.roll()];
  		}
  		if (picked === "performance") {
  			picked = performance[randomPerformance.roll()];
  		}
  		if (picked === "riding" ) {
  			picked = riding[randomRiding.roll()];
  		}
  		
  		randomCharacter.push(picked);
  	}

  	
  	Array.prototype.push.apply(skills, hold);
	hold.splice(0);
  	

  	//random weapon and weapon feats
  	/*var feats;
  	var classWeapon = classIndex;
  	arrayLength = weapons[classWeapon].length;
  	if (classWeapon === 0) {
  		feats = 4;
  	}
  	else { 
  		feats = 2;
  	}

  	for (var i = 0; i < feats; i++) {
  		picked = skills[i];
  		hold.push(picked);
  		skills.splice(i, 1);
  	}*/






  	
  	console.log(randomCharacter);
  	printCharacter(randomCharacter);
};