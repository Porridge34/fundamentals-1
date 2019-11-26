const input = require("readline-sync");
let shapeEntered = input.question("\nEnter a shape: ");
let shapeArea = 0;
shapeEntered = shapeEntered.toLowerCase();
while (shapeEntered != "circle" && shapeEntered != "square" && shapeEntered != "rectangle" && shapeEntered != "triangle"){
  shapeEntered = input.question("Enter a shape: ");
  shapeEntered = shapeEntered.toLowerCase();
}
switch (shapeEntered){
  case ("circle"):
    let radius = input.question("Enter a radius: ");
    shapeArea = radius*radius*Math.PI;
    break;
  case ("square"):
    let sideLength = input.question("Enter a side length: ");
    shapeArea = sideLength * sideLength;
    break;
  case ("rectangle"):
    let sideLength2 = input.question("Enter a side length: ");
    let sideWidth = input.question("Enter a side width: ");
    shapeArea = sideLength2 * sideWidth;
    break;
  case ("triangle"):
    let baseLength = input.question("Enter the base length: ");
    let height = input.question("Enter the height: ");
    shapeArea = baseLength * 0.5 * height;
    break;
}
console.log("Area: " + shapeArea.toLocaleString(undefined, {maximumFractionDigits : 2}));
