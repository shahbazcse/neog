var billInput = document.querySelector("#bill-input");
var cashInput = document.querySelector('#cash-input');
var outputMsg = document.querySelector("#output-msg");
var checkBtn = document.querySelector('#button-check');
var allNotes = document.querySelectorAll('#allNotes');

var notes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", () => handleClick());

/*
() => handleClick()
The above syntax creates a function that calls submitHandler with an argument and assigns that function to onClick.
*/

var handleClick = () => {
    outputMsg.style.display = "none";
    if(billInput.value > 0){
        if(cashInput.value >= billInput.value){
            calculateCash();
        }
        else{
            outputMsg.style.display = "block";
            outputMsg.innerHTML = "Do you wanna wash plates?";
        } 
    }
    else{
        outputMsg.style.display = "block";
        outputMsg.innerHTML = "Please enter a valid value";
    }
}

var calculateCash = () => {
    var amountToBeReturned = cashInput.value - billInput.value;
    for(let i=0; i<notes.length; i++){
        const noOfNotes = Math.trunc(amountToBeReturned/notes[i]);
        amountToBeReturned = amountToBeReturned%notes[i];
        allNotes[i].innerHTML = noOfNotes;
    }
}