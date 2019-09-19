var setOfQuestions = [
    {question:"What is 5 + 2?", answer: "7"},
    {question:"What is 1 + 3?", answer: "4"},
    {question:"What is 2 * 2?", answer: "4"},
    {question:"What is 3 - 2?", answer: "1"},
    {question:"What is 4 / 2?", answer: "2"},
    {question:"What is 1 + 2?", answer: "3"},
    {question:"What is 6 - 4?", answer: "2"}
];

function validateEmail() {
    let rightAnswer = true;
    while (rightAnswer) {
        var randomNumber = Math.floor(7 * Math.random());
        var question = prompt(setOfQuestions[randomNumber].question);
        var answer = (question === setOfQuestions[randomNumber].answer);
        if (question === setOfQuestions[randomNumber].answer) {
            createCookie("valid", answer);
            rightAnswer = false;
        } else {
            alert('Wrong answer, try again!');
        }
    }
}

function createCookie(name, value) {
    document.cookie = escape(name) + "=" + escape(value) + "; path=/";
}