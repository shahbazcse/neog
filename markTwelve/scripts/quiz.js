var form = document.querySelector("form");
var btnSubmit = document.querySelector("button");
var output = document.querySelector(".output");

const correctAnswer = [
    "90°",
    "Right Angled",
    "One Right Angle",
    "12, 16, 20",
    "Equilateral Triangle",
    "100°",
    "30°",
    "a + b + c",
    "No",
    "45°",
];

btnSubmit.addEventListener("click", () => calculateScore());

var calculateScore = () => {
    const quizUserAnswer = new FormData(form);
    var score = 0;
    var index = 0;
    for(let value of quizUserAnswer.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index++;
    }
    output.innerHTML = `Your score is: ${score}`;
}
