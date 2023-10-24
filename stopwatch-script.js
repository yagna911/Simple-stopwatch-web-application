let startTime;

let interval;

let running = false;



const display = document.getElementById('display');

const startButton = document.getElementById('start');

const stopButton = document.getElementById('stop');

const resetButton = document.getElementById('reset');

const lapButton = document.getElementById('lap');

const lapsList = document.getElementById('laps');



startButton.addEventListener('click', start);

stopButton.addEventListener('click', stop);

resetButton.addEventListener('click', reset);

lapButton.addEventListener('click', lap);



function start() {

    if (!running) {

        startTime = Date.now() - (interval || 0);

        interval = setInterval(updateDisplay, 10);

        startButton.textContent = 'Pause';

        running = true;

    } else {

        clearInterval(interval);

        interval = null;

        startButton.textContent = 'Resume';

        running = false;

    }

}



function stop() {

    clearInterval(interval);

    interval = null;

    startButton.textContent = 'Start';

    running = false;

}



function reset() {

    clearInterval(interval);

    interval = null;

    startButton.textContent = 'Start';

    running = false;

    display.textContent = '00:00:00';

    lapsList.innerHTML = '';

}



function lap() {

    if (running) {

        const lapTime = formatTime(Date.now() - startTime);

        const lapItem = document.createElement('li');

        lapItem.textContent = `Lap ${lapsList.childElementCount + 1}: ${lapTime}`;

        lapsList.appendChild(lapItem);

    }

}



function updateDisplay() {

    const elapsedTime = Date.now() - startTime;

    display.textContent = formatTime(elapsedTime);

}



function formatTime(milliseconds) {

    const date = new Date(milliseconds);

    return date.toISOString().substr(11, 8);

}
