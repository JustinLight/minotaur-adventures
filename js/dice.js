
var selectedSides = "6";
var sides;
//on click 
$(".sides button").click(function(){
	//remove selected tag from siblings
 	$(this).siblings().removeClass("selected");
	//add selected tag to this 
 	$(this).addClass("selected");
	//grab sides number
	selectedSides = $(this).attr("id")
	console.log(selectedSides)
	});

var dice = {
	roll: function () {
		var randomNumber = Math.floor(Math.random() * selectedSides) + 1;
		return randomNumber;
	}

}




function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};


