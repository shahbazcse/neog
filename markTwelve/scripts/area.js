
var input = document.querySelectorAll("input");
var output = document.querySelector(".output");
var btnCalculate = document.querySelector("button");

var processValues = () => {
    var a = Number(input[0].value);
    var b = Number(input[1].value);
    var c = Number(input[2].value);
    if(a && b && c){
        if(a>0 && b>0 && c>0){
            var result = findArea(a,b,c);
            output.innerHTML = `Area of Triangle = ${result.toFixed(2)}`;
        } else {
            output.innerHTML = "Please enter positive values"
        }
    } else {
        output.innerHTML = "Please enter all the fields";
    }
}

var findArea = (a,b,c) => {
    var height = Math.sqrt(4*(a*a*b*b)-(Math.pow(((a*a)+(b*b)-(c*c)),2)));
    var area = 0.25*height;
    /*
    var height = Math.sqrt(4*(b*b)-(c*c));
    var area = 0.25*c*height;
    */
    return area;
}

btnCalculate.addEventListener("click", () => processValues());