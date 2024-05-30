


let timer = document.getElementById('timer');
const timerField = document.getElementById("timerField");
let timerDesc = document.getElementById("timer-desc");
let audio = document.getElementById("audio");
let timerIntervalId;
let timeOutId;

timer.innerHTML = `<h1>0</h1>`;

const displayClass = document.querySelector('.display');

const form = document.querySelector("form");

form.addEventListener('submit', function (event) {
    event.preventDefault();
})


function stopTimer() {
    if (timerIntervalId) {
        clearInterval(timerIntervalId);
        clearTimeout(timeOutId);
        timer.innerHTML = `<h1>0</h1>`;
    }
}

function startTimer() {

    if (timerIntervalId) {
        clearInterval(timerIntervalId);
        clearTimeout(timeOutId);
    }

    let timerCount = Number(timerField.value);
    let timerDescValue = timerDesc.value;

    if (timerDescValue === 'min') timerCount *= 60;


    let timerRem = timerCount;
    timerCount *= 1000;

    timerIntervalId = setInterval(() => {
        --timerRem;
        timer.innerHTML = `<h1> ${timerRem}</h1>`;
    }, 1000);

    timeOutId = setTimeout(() => {
        clearInterval(timerIntervalId)
        audio.play();
    }, timerCount)
}