//Dice and roll
let isLocked = [false, false, false, false, false, false];
let rollValue = [0, 0, 0, 0, 0];

let turnNumber = 1;
let lockDice = false;

let rollInfo = (i) => {
    return `Player ${gameData.player}: Roll ${turnNumber - i} / 3`;
}

doStuff();

function roll() {
    if (!lockDice) {
        for (let i = 0; i < 5; i++) {
            let dice = document.getElementById(`d${i + 1}`);

            if (!isLocked[i]) {
                rollValue[i] = Math.ceil(Math.random() * 6);
            }

            switch(rollValue[i]) {
                case 1:
                    dice.innerHTML = "<img src=./svg/Dice-1.svg>";
                    break;
                case 2:
                    dice.innerHTML = "<img src=./svg/Dice-2.svg>";
                    break;
                case 3:
                    dice.innerHTML = "<img src=./svg/Dice-3.svg>";
                    break;
                case 4:
                    dice.innerHTML = "<img src=./svg/Dice-4.svg>";
                    break;
                case 5:
                    dice.innerHTML = "<img src=./svg/Dice-5.svg>";
                    break;
                case 6:
                    dice.innerHTML = "<img src=./svg/Dice-6.svg>";
                    break;

                default: 
                    dice.innerHTML = "<p>ah oh</p>";
                    break;
            }
        }
    }

    document.getElementById('roll').innerText = rollInfo(0);
}

for (let i = 0; i < 5; i++) {
    document.getElementById(`d${i + 1}`).onclick = function() {
        if (!isLocked[i]) {
            isLocked[i] = true;
            document.getElementById(`d${i + 1}`).style.border = '3px dotted red'
        } else {
            isLocked [i] = false;
            document.getElementById(`d${i + 1}`).style.border = '3px solid rgba(255, 255, 255, 0)';
        }
    }
}

//Placement
function setPlaceData(player, i, totals) {
    if (!gameData.p1IsPlaced[player - 1][i] && !gameData.p2IsPlaced[player - 1][i]) {
        //Part 1
        if (i < 6) {
            scoreBlock(player, i).innerText = gameData.allDice[i] > 0 ? gameData.allDice[i] : '❌';
            gameData.p1IsPlaced[player - 1][i] = true;

            totals[0] += gameData.allDice[i];

            //Put in score part 1
            scoreBlock(player, 6).innerText = totals[0];
            scoreBlock(player, 7).innerText = totals[0] >= 63 ? '✔' : '';
            scoreBlock(player, 8).innerText = totals[0] >= 63 ? totals[0] + 35 : totals[0];

            scoreBlock(player, 17).innerText = totals[0] >= 63 ? totals[0] + 35 : totals[0];
        }

        //Part 2
        if (i >= 10 && i <= 16) {
            //Of a kinds
            if (i == 10) scoreBlock(player, 10).innerText = gameData.calP2[player - 1][0] ? addToP2(gameData.valAllDice()) : '❌';
            if (i == 11) scoreBlock(player, 11).innerText = gameData.calP2[player - 1][1] ? addToP2(gameData.valAllDice()) : '❌';

            //Fullhouse
            if (i == 12) scoreBlock(player, 12).innerText = gameData.calP2[player - 1][2] ? addToP2(25) : '❌';

            //streets
            if (i == 13) scoreBlock(player, 13).innerText = gameData.calP2[player - 1][3] ? addToP2(30) : '❌';
            if (i == 14) scoreBlock(player, 14).innerText = gameData.calP2[player - 1][4] ? addToP2(40) : '❌';

            //yahtzee
            if (i == 15) scoreBlock(player, 15).innerText = gameData.calP2[player - 1][5] ? addToP2(50) : '❌';

            //chance
            if (i == 16) scoreBlock(player, 16).innerText = addToP2(gameData.valAllDice());

            gameData.p2IsPlaced[player - 1][i] = true;

            //things to add to totalP2
            function addToP2(value) {
                totals[1] += value;
                return value;
            }

            //Put in score part 2
            scoreBlock(player, 18).innerText = totals[1];
        }

        //Put total score
        scoreBlock(player, 19).innerText = totals[0] >= 63 ? totals[0] + 35 + totals[1] : totals[0] + totals[1];

        for (let j = 0; j < 5; j++) {
            isLocked[j] = false;
            document.getElementById(`d${j + 1}`).style.border = '3px solid white';
        }

        roll();
    }
}

//player 1
let totalP1 = [0, 0, 0];

//player 2
let totalP2 = [0, 0, 0];

function place(player, i) {
    lockDice = false;
    turnNumber = 1;
    if (gameData.player == 1 && player == 0) {
        setPlaceData(1, i, totalP1);
        doStuff();
        gameData.player = 2;

        gameData.finishGame++;
        if (gameData.finishGame >= 26) {
            reset();
        }
    } else if (gameData.player == 2 && player == 1) {
        setPlaceData(2, i, totalP2);
        doStuff();
        gameData.player = 1;

        gameData.finishGame++;
        if (gameData.finishGame >= 26) {
            reset();
        }
    }   
    document.getElementById('roll').innerText = rollInfo(1);
}

function reset() {
    const gD = gameData;
    gD.game++;
    gD.finishGame = 0;
    gD.player = 1;

    //Top is player 1 and bottom is player 2
    //Part 1     
    gD.p1IsPlaced = [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ],

    //part 2
    gD.calP2 = [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ],

    gD.p2IsPlaced = [
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false]
    ]

    totalP1 = [0, 0, 0];
    totalP2 = [0, 0, 0];

    roll();
}