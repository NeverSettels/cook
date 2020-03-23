//(t°C × 9/5) + 32 

var tempConvert = function(temp) {
	return (temp*9/5)+32
}
var input = prompt("Enter a temperature in Celsius to convert");
var result = tempConvert(input);
alert(result);


var galConvert = function(gal){
  return (gal*3.7854)
}
var input = prompt("Enter the gallons need converting")
var result = galConvert(input)
alert(result)