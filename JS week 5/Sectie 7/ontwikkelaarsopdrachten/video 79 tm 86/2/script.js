let nums = new Array(8);
let totalUser = 0;
let target = 0;

function random(value) {return Math.ceil(Math.random() * value);}


function calNumbers() {   
    for (let i = 0; i < nums.length; i++) {
        nums[i] = random(10);

        document.getElementById(`num${i}`).innerText = nums[i];
    }

    target = random(45);
    document.getElementById('target').innerText = target;
}

calNumbers();

//reset
function reset() {
    calNumbers();
    totalUser = 0;
    for (let i = 0; i < 8; i++) {
        document.getElementById(`num${i}`).innerText = nums[i];
    }
}

//Get user input
document.getElementById('canDone').onclick = function() {
    if (totalUser === target) {
        animCorrect();
        reset();
    } else if (totalUser != target) {
        animIncorrect();
        reset();
    }
}

//Get usere answer
for (let i = 0; i < 8; i++) {
    document.getElementById(`num${i}`).onclick = function() {
        totalUser += nums[i];
        document.getElementById(`num${i}`).innerText = '-';
        nums[i] = 0;
    }
}

//animation
function animCorrect() {
	document.getElementById("target").style.animation = 'none';
	document.getElementById("target").offsetWidth;
	document.getElementById("target").style.animation = 'alternate 2s correct ease-in-out';
}

function animIncorrect() {
	document.getElementById("target").style.animation = 'none';
	document.getElementById("target").offsetWidth;
	document.getElementById("target").style.animation = 'alternate 2s incorrect ease-in-out';
}