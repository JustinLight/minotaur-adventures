var randomCharacter = [];
var classList = ["Fighter", "Magic User", "Cleric", "Elf", "Dwarf", "Halfling", "Mystic", "Thief"];
var classIndex;
var abilityBonus = [0, -4, -3, -3, -2, -2, -1, -1, -1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3];
var skills = ["Arcane Lore", "Balance", "Bluff", "Cooking", "craft", "Diplomacy", "Disguise", "Engineering", "Escape Artist", "Etiquette (pick a culture)", "First Aid", "Gambling", "Geography", "History", "Intimidation", "Jumping", "Language (pick a language)", "Laws (pick a culture)", "Lip Reading", "Magical Engineering", "Nature Lore", "Navigating", "performance", "Religious Lore", "riding", "Sense Motive", "Swimming", "Tracking"];
var craft = ["Carpentry", "Smithing", "Fletching", "Skinning", "Leatherworking", "Rope Binding", "Tailoring", "Gem Cutting", "Forgery", "Masonry", "Thatching", "Drawing/Painting", "Sculpture"];
var performance = ["Singing", "Playing an instrument", "Dancing", "Acting", "Juggling", "Jesting", "Storytelling", "Poetry"];
var riding = ["Riding - Horse", "Riding - Elephant", "Riding - Dire Wolf", "Riding - Griffon", "Riding - Pegasus", "Riding - Hippogriff", "Riding - Giant Eagle"];
var picked;
var weapons = [["Hand Axe", "Blackjack", "Club", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Lance", "Mace", "Net", "Spear", "Bastard Sword", "Normal Sword", "Short Sword", "Trident", "Whip", "Battle Axe", "Halberd", "Pike", "Poleaxe", "Staff", "Two-Handed Sword", "Horned Shield", "Knife Shield", "Sword Shield", "Tusked Shield", "Large Blowgun", "Small Blowgun", "Bolas", "Long Bow", "Short Bow", "Heavy Crossbow", "Light Crossbow", "Pistol", "Sling", "Smoothbore"],
				["Dagger", "Net", "Whip", "Staff", "Large Blowgun", "Small Blowgun", "Pistol", "Sling"],
				["Blackjack", "Club", "Throwing Hammer", "War Hammer", "Mace", "Staff", "Sling"],
				["Hand Axe", "Blackjack", "Club", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Lance", "Mace", "Net", "Spear", "Bastard Sword", "Normal Sword", "Short Sword", "Trident", "Whip", "Battle Axe", "Halberd", "Pike", "Poleaxe", "Staff", "Two-Handed Sword", "Horned Shield", "Knife Shield", "Sword Shield", "Tusked Shield", "Large Blowgun", "Small Blowgun", "Bolas", "Long Bow", "Short Bow", "Heavy Crossbow", "Light Crossbow", "Pistol", "Sling", "Smoothbore"],
				["Hand Axe", "Blackjack", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Mace", "Net", "Normal Sword", "Short Sword", "Trident", "Whip", "Battle Axe", "Staff", "Horned Shield", "Knife Shield", "Sword Shield", "Large Blowgun", "Small Blowgun", "Bolas", "Short Bow", "Light Crossbow", "Pistol", "Sling"],
				["Hand Axe", "Blackjack", "Cestus", "Dagger", "Short Sword", "Horned Shield", "Knife Shield", "Sword Bow", "Light Crossbow", "Pistol"],
				["Hand Axe", "Blackjack", "Club", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Lance", "Mace", "Net", "Spear", "Bastard Sword", "Normal Sword", "Short Sword", "Trident", "Whip", "Battle Axe", "Halberd", "Pike", "Poleaxe", "Staff", "Two-Handed Sword", "Large Blowgun", "Small Blowgun", "Bolas", "Long Bow", "Short Bow", "Heavy Crossbow", "Light Crossbow", "Pistol", "Sling", "Smoothbore"],
				["Hand Axe", "Blackjack", "Club", "Cestus", "Dagger", "Throwing Hammer", "War Hammer", "Javelin", "Lance", "Mace", "Net", "Spear", "Bastard Sword", "Normal Sword", "Short Sword", "Trident", "Whip", "Large Blowgun", "Small Blowgun", "Bolas", "Long Bow", "Short Bow", "Heavy Crossbow", "Light Crossbow", "Pistol", "Sling"]];
var itemArray = ["Grappling Hook", "Holy Water (small vial)", "Iron Spike", "Lantern and Flask of Oil", "Mirror (steel)", "Pole (10')", "Red Powder (flask)", "Rope (50')", "Sack (holds 200cn)", "Sack (holds 600cn)", "Tent", "Tinder Box", "Torch (5)"];
var saves = [[12, 13, 14, 15, 16], [13, 14, 13, 16, 15], [11, 12, 14, 16, 15], [12, 13, 13, 15, 15], [8, 9, 10, 13, 12], [8, 9, 10, 13, 12], [12, 13, 14, 15, 16], [13, 14, 13, 16, 15]]
var spells = ["Analyse", "Charm Person", "Detect Magic", "Floating Disc", "Hold Portal", "Light", "Magic Missile", "Protection From Evil", "Read Languages", "Shield", "Sleep", "Ventriloquism"]
var specialAbilities = ["None", "None", "None", "Heatvision / Elfsight / Ghoul Immunity", "Heatvision / Stonelore", "Small/Nimble/Unobtrusive", "None", "None"]

function Dice(sides, n) {
  this.sides = sides +1;
  this.n = n;
 
}

Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * (this.sides - this.n) + this.n);
  	return randomNumber;  
	}
  

var random6 = new Dice(6, 1);
var random8 = new Dice(8, 1);
var randomCraft = new Dice(13, 1);
var randomPerformance = new Dice(8, 1);
var randomRiding = new Dice(7, 1);
var randomSkill = new Dice(28, 1);
var random5 = new Dice(5, 1);
var random2 = new Dice(2, 1);
var random4 = new Dice(4, 1);
var random13 = new Dice(13, 1);
var random12 = new Dice(12, 1);


function printCharacter(character) {
  var setCharacter = ["class", "str", "strBonus", "int", "intBonus", "wis", "wisBonus", "con", "conBonus", "dex", "dexBonus", "cha", "chaBonus", "attackBonus", "skills", "feats", "items", "death", "wands", "paralysis", "breath", "spell", "specialAbilities", "firstSpell"]
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
  	var skillList = [];
    var  intBonus = randomCharacter[4];
    if (intBonus < 1) {
      intBonus = 0;
    };
    for (var i = 0; i < 4 + intBonus; i++) {
  		picked = skills[randomSkill.roll()];
  		
  		 		
  		if (skillList.indexOf(picked)=== -1) {

	  		if (picked === "craft") {
	  			picked = craft[randomCraft.roll()];
	  		}
	  		if (picked === "performance") {
	  			picked = performance[randomPerformance.roll()];
	  		}
	  		if (picked === "riding" ) {
	  			picked = riding[randomRiding.roll()];
	  		}
  		
  			skillList.push(picked);
  		}

  		else {
  			i--;
  		}
      

 	  }

  	var skillSting = skillList.join(', ');
    randomCharacter.push(skillSting);

  	

  	//random weapon and weapon feats
  	var feats;
    var featList = [];
  	if (classIndex === 0) {
  		feats = 4;
  	}
  	else { 
  		feats = 2;
  	}

  	for (var i = 0; i < feats; i++) {

  		picked = weapons[classIndex][Math.floor(Math.random() * weapons[classIndex].length)];
      if (featList.indexOf(picked)=== -1) {
        featList.push(picked);
      }
      else {
        i--;
      }
      
  	}
    var featString = featList.join(', ');
    randomCharacter.push(featString);
    


    //random items

    var baseItems = ["Backpack", "Waterskin (full)", "Rations - dried (1 week)", "Purse"]
    var items = baseItems.concat(featList);

    //random armor

    var armorList = ["Leather Armor", "Scale Mail", "Chain Mail", "Banded Mail", "Plate Mail"]

    //fighter cleric dwarf elf halfling
    if (classIndex === 0 || classIndex === 2 || classIndex === 3 || classIndex === 4 || classIndex === 5)
      items.push(armorList[random5.roll()])
      if (random2.roll() === 2) {
        items.push("Shield");
      }

    //check class for class items

    if (classIndex === 1) {
      items.push('Spell Book');
    }

    if (classIndex === 2) {
      items.push('Holy Symbol');
    }

    //check for weapons that need ammo

    if (items.indexOf("Long Bow") > -1 || items.indexOf("Short Bow") > -1) {

      items.push('Arrows (20)');
      items.push('Quiver');
    }

    if (items.indexOf("Heavy Crossbow") > -1 || items.indexOf("Light Crossbow") > -1) {

      items.push('Bolts (20)');
      items.push('Quiver');
    }

    if (items.indexOf("Large Blowgun") > -1 || items.indexOf("Small Blowgun") > -1) {

      items.push('Pellets (30)');

    }

    if (items.indexOf("Pistol") > -1 || items.indexOf("Smoothbore") > -1) {

      items.push('Bullets (20)');

    }

    //clothes
    var cloak = ["Cloak (short)", "Cloak (long)"];
    var clothes = ["Clothes (peasant)", "Clothes (merchant)", "Clothes (noble)", "Clothes (royal)"];
    var boots = ["Boots (plain)", "Boots (fancy)"];
    items.push("Belt");
    items.push(cloak[random2.roll()-1]);
    items.push(clothes[random4.roll()-1]);
    items.push(boots[random2.roll()-1]);
    if (random2.roll() === 2) {
        items.push("Hat");
      }

    //add a few more random items
    var miscItems = [];
    for (var i = 0; i < 4; i++) {
          picked = itemArray[random13.roll()-1];
          if (miscItems.indexOf(picked) === -1) {
            miscItems.push(picked);
          }
          else {
            i--;
          }
       }
       var allItems = items.concat(miscItems);
       var itemString = allItems.join(', ');

    randomCharacter.push(itemString);

    //set saves based on class
    for (var i = 0; i < 5; i++) {
          randomCharacter.push(saves[classIndex][i])
       };

    //Specail Abilities
    randomCharacter.push(specialAbilities[classIndex]);


    //random spells for Elf and Magic User only
    if (classIndex === 1) {
      randomCharacter.push(spells[random12.roll()-1])
    }
    if (classIndex === 3) {
      randomCharacter.push(spells[random12.roll()-1])
    }
    else {
      randomCharacter.push("None")
    }

    	console.log(randomCharacter);
    	printCharacter(randomCharacter);
};