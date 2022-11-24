const opperator = ["+", "-", "*", "/"];

//Random number
function randomDown(value) {return Math.floor(Math.random() * value);}
function randomUp(value) {return Math.ceil(Math.random() * value);}

//Generate the question
function getOpperator() {
    return opperator[randomDown(4)]
}

function getQuestion() {
    let question = {
        num1: 0,
        num2: 0,
        opperator: " ",
        answer: function() {
            if (this.opperator === "+") return this.num1 + this.num2 + '';
            else if (this.opperator === "-") return this.num1 - this.num2 + '';
            else if (this.opperator === "*") return this.num1 * this.num2 + '';
            else if (this.opperator === "/") return this.num1 / this.num2 + '';
        }
    }

    question.opperator = getOpperator();

    switch(question.opperator) {
        case "+":
            question.num1 = randomUp(99);
            question.num2 = randomUp(99);
            break;
        case "-":
            while(question.num1 <= question.num2) {
                question.num1 = randomUp(99);
                question.num2 = randomUp(99);
            }
            break;
        case "*":
            question.num1 = randomUp(9);
            question.num2 = randomUp(9);
            break;
        case "/":
            question.num1 = randomUp(9);
            question.num2 = randomUp(2);
            break;
    }

    return question;
}

//Timer
var startTime, endTime
let time = {
    sec: 0,
    min: 0
}

function startTime() {
    startTime = new Date();
}

function stopTime() {
    endTime = new Date();
    var totalTime = endTime - startTime;
    totalTime /= 1000;

    time.sec = totalTime;
    while(time.sec >= 60) {
        time.min++;
        time.sec -= 60;
    }
}

startTime();


//Get user input
let score = 0;
let fout = -1;
getOpperator();
let Q = getQuestion();

getInput();

function correct() {
    getOpperator();
    Q = getQuestion();
}

function getInput() {
    let input = document.getElementById('userAnswer').value;
    
    if (input === Q.answer()) {
        score++;
        correct();
    } else if (input != Q.answer()) {
        fout++;
    }
    
    document.getElementById('num1').innerText = Q.num1;
    document.getElementById('num2').innerText = Q.num2;
    document.getElementById('thing').innerText = Q.opperator;
    document.getElementById('score').innerText = `SCORE: ${score}`;
    document.getElementById('userAnswer').value = "";

    modal();
}

//If win
function modal() {
    if (score >= 10) {
        document.getElementById('modal').style.display = 'block';

        let f = '';
        if (fout > 1) f = 'en';
        document.getElementById('goed').innerText = `Je heb ${score} vragen goed gemaakt`;
        document.getElementById('fouten').innerText = `Je heb ${fout} fout${f}`;
        stopTime();
        let m = '';
        if (time.min > 1) m = 'minuten'
        else m = 'minuut'
        document.getElementById('time').innerText = `Je heb er ${Math.floor(time.min)} ${m} en ${Math.floor(time.sec)} seconden`;
    }
}

document.getElementById('modal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
    reset();
}


function reset() {
    startTime = new Date();
    time.sec = 0;
    time.min = 0;

    score = 0;
    fout = -1;

    getInput();
    console.log('reset')
}