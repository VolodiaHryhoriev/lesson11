let date = new Date;

// start show data & time function
setInterval(() => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + (month + 1);
    if (month >= 10) month = month + 1
    document.getElementById('curentDate').innerHTML = `${day}.${month}.${year}`
})

setInterval(() => {
        let dd = new Date();
        let hh = dd.getHours();
        let mm = dd.getMinutes();
        let ss = dd.getSeconds();
        if (hh < 10) hh = '0' + hh;
        if (mm < 10) mm = '0' + mm;
        if (ss < 10) ss = '0' + ss;
        document.getElementById('curentTime').innerHTML = `${hh}:${mm}:${ss}`
    })
    // end show data & time function

//start stopwatch function

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.getElementById('start').addEventListener('click', () => start());
document.getElementById('loop').addEventListener('click', () => loop());
document.getElementById('stop').addEventListener('click', () => stop());
document.getElementById('reset').addEventListener('click', () => reset());

function start() {
    stop();
    cron = setInterval(() => { stopwatch(); }, 10);
}

function loop() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = document.getElementById('watch').innerHTML;
    document.getElementById('loopBlock').appendChild(newDiv);
}

function stop() {
    clearInterval(cron);
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
    document.getElementById('loopBlock').innerHTML = '';
}

function stopwatch() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}

//end stopwatch function

// start timer function

let count = 1
let value;
document.getElementById('setMinutes').innerHTML = count
    // document.getElementById('timeLeft').innerHTML = count

document.getElementById('addMin').addEventListener('click', () => {
    count++;
    document.getElementById('setMinutes').innerHTML = count;
    //document.getElementById('timeLeft').innerHTML = count
})
document.getElementById('reduceMin').addEventListener('click', () => {
    count--;
    document.getElementById('setMinutes').innerHTML = count;
    // document.getElementById('timeLeft').innerHTML = count
    if (count < 1) {
        count = 1;
    };
})

document.getElementById('timerStart').addEventListener('click', startTimer);
let timerShow = document.getElementById('timeLeft');

// function timer() {

//     if (second == 60) {
//         second = 0;
//         minute++;
//     }
//     if (minute == 60) {
//         minute = 0;
//         hour++;
//     }
// }
let myInt

function startTimer() {
    let timeMinut = parseInt(document.getElementById('setMinutes').innerHTML) * 60;
    stopTimer();
    myInt = setInterval(() => {
        let seconds = timeMinut % 60;
        let minutes = timeMinut / 60 % 60;
        if (timeMinut === 0) {
            clearInterval(myInt);
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
            if (timeMinut !== strTimer) {
                strTimer = value
            }
        }
        --timeMinut;
    }, 1000)
}

document.getElementById('timerStop').addEventListener('click', stopTimer)

function stopTimer() {
    clearInterval(myInt);
    value = document.getElementById('timeLeft').innerHTML
    console.log(value)
}

document.getElementById('timerReset').addEventListener('click', () => {
    document.getElementById('timeLeft').innerHTML = '00:00';
    clearInterval(timer);
})


// end timer function