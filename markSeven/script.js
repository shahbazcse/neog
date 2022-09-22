var btnOutput = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var errorMsg = document.querySelector(".errorMsg");
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

btnOutput.addEventListener("click", handleClick);

function handleClick(){
    var text = txtInput.value;
    fetch(getTranslation(text))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerHTML = translatedText;
    })
    .catch(handleError);
}

function getTranslation(text){
    return serverURL + "?" + "text=" + text;
}

function handleError(error){
    console.log("Error!", error);
    errorWarning();
}

errorWarning = () => {
    errorMsg.innerHTML = "Server Error: Please try again after sometime"
}