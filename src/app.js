const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const watch = document.querySelector('.watch');

let timer;
let hr = 0;
let min = 0;
let sec = 0;

start.addEventListener('click', function () {
    timer = setInterval(() => {
        sec++;

        if (sec > 60) {
            sec = 0;
            min++;
        }

        if (min > 60) {
            min = 0;
            hr++
        }

        displayTime();

    }, 1000);
});

stop.addEventListener('click', function () {
    clearInterval(timer);
});

reset.addEventListener('click', function () {
    clearInterval(timer);
    watch.innerHTML = '00:00:00';
});

function displayTime() {
    let secDisplay = sec;
    let minDisplay = min;
    let hrDisplay = hr;

    if (secDisplay < 10) {
        secDisplay = '0' + secDisplay;
    }

    if (minDisplay < 10) {
        minDisplay = '0' + minDisplay;
    }

    if (hrDisplay < 10) {
        hrDisplay = '0' + hrDisplay;
    }

    watch.innerHTML = `${hrDisplay}:${minDisplay}:${secDisplay}`;
}