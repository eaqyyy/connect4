const dotBoard = $('.dot-board');
const resetButton = $('.reset-button');
const turnChip = $('#turn-chip');
const remainingChipText = $('#remaining-chip-text');
const winnerText = $('#green-red-text');
const winnerPlaceHolder = $('#won-the-game-text');
const greenScore = $('#green-win-count');
const redScore = $('#red-win-count');

const green = "green";
const red = "red";


const col0 = $('.col-zero');
const col1 = $('.col-one');
const col2 = $('.col-two');
const col3 = $('.col-three');
const col4 = $('.col-four');
const col5 = $('.col-five');
const col6 = $('.col-six');

var currentTurn = green;
var wonStatus = false;
var greenChips = 21;
var redChips = 21;
var greenWins = 0;
var redWins = 0;
var amountClicked = 0;

const greenChecker = [green, green, green, green];
const redChecker = [red, red, red, red];
var grid = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0
]

function horizontalLineCheck(turn) {
    var comparator = [];
    var actualList = [];
    var row = 0;
    var column = 0;
    var colId = 0;
    if (turn === green) {
        comparator = greenChecker;
    }

    if (turn === red) {
        comparator = redChecker;
    }

    while (row < 6) {
        column = 0;
        while (column < 4) {
            actualList = [grid[colId + column], grid[colId + column + 1], grid[colId + column + 2], grid[colId + column + 3]];
            if (JSON.stringify(comparator) == JSON.stringify(actualList)) {
                return true;
            }

            column++;
        }

        colId += 7;
        row++;
    }

    return false;
}

function verticalLineCheck(turn) {
    var comparator = [];
    var actualList = [];
    var looper = 0;
    var rowId = 0;
    if (turn === green) {
        comparator = greenChecker;
    }

    if (turn === red) {
        comparator = redChecker;
    }

    while (rowId < 7) {
        looper = 0;
        while (looper < 3) {
            actualList = [grid[rowId + (7 * looper)], grid[rowId + (7 * (looper + 1))], grid[rowId + (7 * (looper + 2))], grid[rowId + (7 * (looper + 3))]];
            if (JSON.stringify(comparator) == JSON.stringify(actualList)) {
                return true;
            }

            looper++;
        }

        rowId++;
    }
    return false;

}

function diagonalUpCheck(turn) {

}

function diagonalDownCheck(turn) {

}

function checkWinner(turn) {
    if (
        horizontalLineCheck(currentTurn)
        || verticalLineCheck(currentTurn)
        // || diagonalDownCheck(currentTurn)
        // || diagonalUpCheck(currentTurn)
    ) {
        winnerText.text(currentTurn);
        winnerText.css("color", currentTurn);
        winnerPlaceHolder.text("has won the game!");
        if (turn === green) {
            greenWins++;
            greenScore.text(greenWins);
        }
        if (turn === red) {
            redWins++;
            redScore.text(redWins);
        }
        wonStatus = true;
        return true;
    }

    return false;

}

function turnSwitcher() {
    if (checkWinner(currentTurn)) {
        return;
    }

    amountClicked++;
    if (amountClicked === 42) {
        winnerText.text("");
        winnerPlaceHolder.text("we have a time game here!");
        remainingChipText.text("0");
        turnChip.css("background-color", "grey");
        return;
    }

    if (currentTurn === green) {
        greenChips--;
        turnChip.css("background-color", red);
        remainingChipText.text(redChips);
        currentTurn = red;
        return;
    }

    redChips--;
    turnChip.css("background-color", green);
    remainingChipText.text(greenChips);
    currentTurn = green;
    return;
}

col0.click(function () {
    if(wonStatus) return;

    if (checkWinner(currentTurn)) {
        return;
    }

    var looper = 0;
    var current = 35;


    if (grid[0] === green || grid[0] === red) {
        return;
    }

    while (looper < 6) {
        if (grid[current] === 0) {
            $('#' + current).css("background-color", currentTurn);
            grid[current] = currentTurn;
            turnSwitcher();
            return;
        }

        current -= 7;
        looper++;
    }
});

col1.click(function () {
    if(wonStatus) return;

    if (checkWinner(currentTurn)) {
        return;
    }

    var looper = 0;
    var current = 36;


    if (grid[1] === green || grid[1] === red) {
        return;
    }

    while (looper < 6) {
        if (grid[current] === 0) {
            $('#' + current).css("background-color", currentTurn);
            grid[current] = currentTurn;
            turnSwitcher();
            return;
        }

        current -= 7;
        looper++;
    }
});

col2.click(function () {
    if(wonStatus) return;

    if (checkWinner(currentTurn)) {
        return;
    }

    var looper = 0;
    var current = 37;


    if (grid[2] === green || grid[2] === red) {
        return;
    }

    while (looper < 6) {
        if (grid[current] === 0) {
            $('#' + current).css("background-color", currentTurn);
            grid[current] = currentTurn;
            turnSwitcher();
            return;
        }

        current -= 7;
        looper++;
    }
});

col3.click(function () {
    if(wonStatus) return;

    if (checkWinner(currentTurn)) {
        return;
    }

    var looper = 0;
    var current = 38;


    if (grid[3] === green || grid[3] === red) {
        return;
    }

    while (looper < 6) {
        if (grid[current] === 0) {
            $('#' + current).css("background-color", currentTurn);
            grid[current] = currentTurn;
            turnSwitcher();
            return;
        }

        current -= 7;
        looper++;
    }
});

col4.click(function () {
    if(wonStatus) return;

    if (checkWinner(currentTurn)) {
        return;
    }

    var looper = 0;
    var current = 39;


    if (grid[4] === green || grid[4] === red) {
        return;
    }

    while (looper < 6) {
        if (grid[current] === 0) {
            $('#' + current).css("background-color", currentTurn);
            grid[current] = currentTurn;
            turnSwitcher();
            return;
        }

        current -= 7;
        looper++;
    }
});

col5.click(function () {
    if(wonStatus) return;

    if (checkWinner(currentTurn)) {
        return;
    }

    var looper = 0;
    var current = 40;


    if (grid[5] === green || grid[5] === red) {
        return;
    }

    while (looper < 6) {
        if (grid[current] === 0) {
            $('#' + current).css("background-color", currentTurn);
            grid[current] = currentTurn;
            turnSwitcher();
            return;
        }

        current -= 7;
        looper++;
    }
});

col6.click(function () {
    if(wonStatus) return;

    if (checkWinner(currentTurn)) {
        return;
    }

    var looper = 0;
    var current = 41;

    if (grid[6] === green || grid[6] === red) {
        return;
    }

    while (looper < 6) {
        if (grid[current] === 0) {
            $('#' + current).css("background-color", currentTurn);
            grid[current] = currentTurn;
            turnSwitcher();
            return;
        }

        current -= 7;
        looper++;
    }
});

function clearBoard() {
    dotBoard.css("background-color", "grey");
    turnChip.css("background-color", "green");
    remainingChipText.text("21");
    winnerText.text(" ");
    winnerPlaceHolder.text("Welcome to Connect 4");

    grid = [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ]


    wonStatus = false;
    currentTurn = green;
    greenChips = 21;
    redChips = 21;
    amountClicked = 0;
}

resetButton.click(clearBoard);