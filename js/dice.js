
var selectedSides = $(this)

var dice = {
	sides: selectedSides,
	roll: function () {
		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber;
	}

}
var sides;
//on click 
$(".sides button").click(function(){
	//remove selected tag from siblings
 	$(this).siblings().removeClass("selected");
	//add selected tag to this 
 	$(this).addClass("selected");
	//grab sides number
	});



function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};


