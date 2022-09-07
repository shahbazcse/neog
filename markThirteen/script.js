var DoB = document.querySelector("input");
var btnShow = document.querySelector("button");
var output = document.querySelector(".output");

btnShow.addEventListener("click", () => processValues());


var processValues = () => {

    if(DoB.value!==""){
        var DoBInput = DoB.value;
        
        if(DoBInput !== ""){
            var inputDate = DoBInput.split("-");
            var yyyy = inputDate[0];
            var mm = inputDate[1];
            var dd = inputDate[2];
        }
    
        var date = {
            day: Number(dd),
            month: Number(mm),
            year: Number(yyyy)
        };
    
        var dateString = dateToString(date);
        var list = checkAllPalindromeFormats(dateString);
        var isPalindrome = false;
    
        for(let i=0; i < list.length; i++){
            if(list[i]){
                isPalindrome = true;
                break;
            }
        }
    
        if(!isPalindrome){
            const [ctr1, nextDate] = nextPalindromeDate(date);
            const [ctr2, prevDate] = prevPalindromeDate(date);
    
            if(ctr1 > ctr2){
                output.innerHTML = `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed by ${ctr2} days`;
            } else {
                output.innerHTML = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days`;
            }
        } else {
            output.innerHTML = "Amazing! Your birth date is a palindrome!";
        }
    } else {
        output.innerHTML = "Please select a date"
    }
    
}

var reverseString = (str) => {
    var charList = str.split('');
    var reverseList = charList.reverse();
    var reverseStr = reverseList.join('');
    return reverseStr;
}

var checkPalindrome = (str) => {
    var reverseStr = reverseString(str);
    return str === reverseStr;
}

var dateToString = (date) => {
    var dateToStr = {day: "", month: "", year: ""};

    if(date.day<10){
        dateToStr.day = "0" + date.day;
    } else {
        dateToStr.day = date.day.toString();
    }

    if(date.month<10){
        dateToStr.month = "0" + date.month;
    } else {
        dateToStr.month = date.month.toString();
    }

    dateToStr.year = date.year.toString();
    return dateToStr;
}

var getDateAllFormats = (date) => {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy =  date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;

    return [ddmmyyyy,mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}

var checkAllPalindromeFormats = (date) => {
    var dateAllFormatList = getDateAllFormats(date);
    var palindromeList = [];
    
    for(var i=0; i<dateAllFormatList.length; i++){
        var result = checkPalindrome(dateAllFormatList[i]);
        palindromeList.push(result);
    }
    return palindromeList;
}

var checkLeapYear = (year) => {
    if(year % 400 === 0)
        return true;
    if(year % 100 === 0)
        return false;
    if(year % 4 === 0)
        return true;
    return false;
}

var findNextDate = (date) => {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    /* For finding the next date, we need to increase the day 
    and it might change the month or day or year */

    if(month === 2){
        if(checkLeapYear(year)){
            if(day>29){ // checking for February in Leap year
                day = 1;
                month = 3;
            }
        } else {
            if( day > 28){ // checking for February
                day = 1;
                month = 3;
            }
        }
    } else {
        if(day > daysInMonth[month-1]){
            day = 1;
            month++;
        }
    }

    if(month > 12){
        month = 1;
        year++
    }

    return {
        day: day,
        month: month,
        year: year
    };
}

var nextPalindromeDate = (date) => {
    var nextDate = findNextDate(date);
    var ctr=0;

    while(1){
        ctr++;
        var dateString = dateToString(nextDate);
        var resultList = checkAllPalindromeFormats(dateString);

        for(let i=0; i<resultList.length; i++){
            if(resultList[i]){
                return [ctr, nextDate];
            }
        }
        nextDate = findNextDate(nextDate);
    }
}

var findPreviousDate = (date) => {
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(day === 0){
        month--;
        if(month === 0){
            month = 12;
            day = 31;
            year--;
        } else if(month === 2){ // checking for February
            if(checkLeapYear(year)){
                day = 29;
            } else {
                day = 28;
            }
        } else {
                day = daysInMonth[month-1];
            }
        }

        return {
            day: day,
            month: month,
            year: year    
        };
    }

var prevPalindromeDate = (date) => {
    var prevDate = findPreviousDate(date);
    var ctr=0;

    while(1){
        ctr++;
        var dateString = dateToString(prevDate);
        var resultList = checkAllPalindromeFormats(dateString);
        
        for(let i=0; i<resultList.length; i++){
            if(resultList[i]){
                return [ctr, prevDate];
            }
        }
        prevDate = findPreviousDate(prevDate);
    }
}