let toppingName = document.getElementById("topping");
let toppingCalories;
let milkName = document.getElementById("base");
let milkCalories;
if (toppingName == "pearl"){
    toppingCalories = 200;
}
if (milkName == "whole"){
    milkCalories = 150;
}
function calories(toppingCalories, milkCalories){
    return toppingCalories + milkCalories;
}
