var userInput = document.querySelectorAll("input");
var btnCheck = document.querySelector("#btn-check");
var output = document.querySelector(".output");

btnCheck.addEventListener("click", () => processValues());

var processValues = () => {
    if(userInput[0].value && userInput[1].value && userInput[2].value){
        if(userInput[0].value>0 && userInput[1].value>0 && userInput[2].value>0){
            var sumOfAngles = Number(userInput[0].value) + Number(userInput[1].value) + Number(userInput[2].value);
            if(sumOfAngles===180){
                output.innerHTML = "Angles form a triangle ✅";
            } else{
                output.innerHTML = "Angles does not form a triangle ❌";
            }
        } else {
            output.innerHTML = "Please enter positive values";
        }
    } else {
        output.innerHTML = "Please enter all fields";
    }
}