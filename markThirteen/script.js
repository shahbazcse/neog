var DoB = document.querySelector("input");
var btnShow = document.querySelector("button");
var output = document.querySelector(".output");

btnShow.addEventListener("click", () => processValues());

var str = "ollo"; // input

var processValues = () => {
    var reversedInput = reverseString(str);
    checkPalindrome(reversedInput);
    dateToString();
}

var reverseString = () => {
    var charList = str.split('');
    var reverseList = charList.reverse();
    var reverseStr = reverseList.join('');
    return reverseStr;
}

var checkPalindrome = (reversedInput) => {
    if(reversedInput === str){
        console.log("Is Palindrome");
    } else{
        console.log("Not Palindrome");
    }
}

var dateToString = () => {
    
}