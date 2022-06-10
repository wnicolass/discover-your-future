const response = document.querySelector('#response');
const inputQuestion = document.querySelector('#question');
const buttonQuestion = document.querySelector('#buttonQuestion');

const responses = [
    "Certainty!",
    "I'm not so sure.",
    "It is decidedly so.",
    "Do not count on it.",
    "No doubt!",
    "Ask again later.",
    "Yes, definitely!",
    "My answer is no.",
    "You can count on it.",
    "Better not tell you now.",
    "As I see it, yes.",
    "My sources say no.",
    "Probably.",
    "Can't predict right now.",
    "Good outlook.",
    "Prospects are not so good.",
    "Yeah.",
    "Concentrate and ask again.",
    "Signs point to yes.",
];

function askQuestion() {
    response.style.opacity = 1;
    if (inputQuestion.value === '') {
        alert('Ask your question, fool');
        return;
    }

    buttonQuestion.setAttribute("disabled", true);

    const question = "<div>" + inputQuestion.value + "</div>";

    const randomNumber = Math.floor(Math.random() * responses.length);

    response.innerHTML = question + responses[randomNumber];

    inputQuestion.value = "";

    setTimeout(() => {
        response.style.opacity = 0;
        buttonQuestion.removeAttribute("disabled");
    }, 4000);
};