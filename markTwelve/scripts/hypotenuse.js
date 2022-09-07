var input = document.querySelectorAll("input");
var output = document.querySelector(".output");
var btnCalculate = document.querySelector("button");

var processValues = () => {
    var a = Number(input[0].value);
    var b = Number(input[1].value);
    if(a && b){
        if(a>0 && b>0){
            var result = findHypotenuse(a,b);
            output.innerHTML = `Hypotenuse = ${result}`;
        } else{
            output.innerHTML = "Please enter positive values";
        }
    }
    else{
        output.innerHTML = "Please enter both fields";
    }
}

var findHypotenuse = (a,b) => {
    var hypotenuse = Math.sqrt((a*a)+(b*b));
    return hypotenuse;
}

btnCalculate.addEventListener("click", () => processValues());

/*
function "processValues" must be called on line 24 after the function definition on line 9
*/