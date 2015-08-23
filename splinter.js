var theNumber = 1;
 
var michelangelo = function(value){
    value = (value * 2);
    return value;
}
 
var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
}
 
var leonardo = function(value){
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
}
 
var raphael = function(value, anotherValue, yetAnotherValue){
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
}
 
var splinter1 = (michelangelo(theNumber) + leonardo(theNumber));

(theNumber = theNumber * 2);
 
var splinter2 = (donatello(theNumber, 2)) - (raphael(3, 2, theNumber));

var splinter = function(a, b){
	var z = a * b;
	var myArray = [splinter1, splinter2, z];
	return myArray;
}
console.log(splinter(1,2));