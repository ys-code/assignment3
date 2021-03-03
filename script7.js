//Validate Repeat Entry in Lab5


var miles;
var gallons;
var mpg;
var again = "y";
window.alert('hello');
do {
    miles = window.prompt("Enter miles driven");
    miles = parseFloat(miles);
    gallons = window.prompt("Enter gallons of gas used");
    gallons = parseFloat(gallons);
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        mpg = parseInt(mpg, 10);
        window.document.write("Miles per gallon: " + mpg);
    } else {
        window.alert("One of both entries are invalid.");
    }
    //validate y/n  entry
    do{
        again = window.prompt("Repeat entries? (y or n)");  
    }while(!(again=="y" || again==="n"));

} while (again === "y");