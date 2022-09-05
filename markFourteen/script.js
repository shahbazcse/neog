var input = document.querySelectorAll("input");
var output = document.querySelector(".output");
var btnCalculate = document.querySelector("button");

btnCalculate.addEventListener("click", () => processValues());

var processValues = () => {
    var costPrice = Number(input[0].value);
    var stocks = Number(input[1].value);
    var sellingPrice = Number(input[2].value);
    if(costPrice && stocks && sellingPrice){
        calculateProfitAndLoss(costPrice, stocks, sellingPrice);
    } else{
        output.innerHTML = "Please enter all the fields"
    }
}

var calculateProfitAndLoss = (costPrice, stocks, sellingPrice) => {
    if(costPrice < sellingPrice){
        var profit = (sellingPrice - costPrice)*stocks;
        var profitPercentage = (profit/costPrice)*100;
        output.innerHTML = `Your profit is ${profit} and the profit percent is ${profitPercentage}%`;
    } else if(costPrice > sellingPrice){
        var loss = (costPrice - sellingPrice)*stocks;
        var lossPercentage = (loss/costPrice)*100;
        output.innerHTML = `Your loss is ${loss} and the loss percent is ${lossPercentage}%`;
    } else{
        output.innerHTML = "No gain and no loss";
    }
}