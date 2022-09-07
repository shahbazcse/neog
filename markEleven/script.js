var DoB = document.querySelector(".input-date");
var luckyNo = document.querySelector(".input-number");
var btnCheck = document.querySelector(".btn-check");
var output = document.querySelector(".output");

btnCheck.addEventListener("click",() => processValues());

var processValues = () => {
    if((luckyNo.value>0)){
        if( (DoB.value) && (luckyNo.value) ){
            var sumDOB = calculateDateSum();
            checkLuckyNumber(sumDOB);
        } else {
            output.innerHTML = "Please enter both the fields";
        }
    } else {
        output.innerHTML = "Please enter a positive value"
    }
}
var calculateDateSum = () => {
    var date = DoB.value.replaceAll("-","");
    var sum = 0;
    for(let digit of date){
        sum = sum + Number(digit);
    }
    return sum;
}

var checkLuckyNumber = (sumDOB) => {
    if((sumDOB)%luckyNo.value === 0){
        output.innerHTML = `🥳 ${luckyNo.value} is a lucky number for you! 🥳`;
    } else {
        output.innerHTML = `${luckyNo.value} is not that lucky number for you 😕`;
    }
}


