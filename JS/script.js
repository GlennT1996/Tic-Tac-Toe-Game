document.addEventListener('DOMContentLoaded', function () {

    let box1 = document.getElementById('square-1');
    let box2 = document.getElementById('square-2');
    let box3 = document.getElementById('square-3');
    let box4 = document.getElementById('square-4');
    let box5 = document.getElementById('square-5');
    let box6 = document.getElementById('square-6');
    let box7 = document.getElementById('square-7');
    let box8 = document.getElementById('square-8');
    let box9 = document.getElementById('square-9');

    let currentPlayer = 'X';
    let gameIsGoing = true;


    box1.onclick = function () {
        boxClicked(box1, 0);
    };
    box2.onclick = function () {
        boxClicked(box2, 1);
    };
    box3.onclick = function () {
        boxClicked(box3, 2);
    };
    box4.onclick = function () {
        boxClicked(box4, 3);
    };
    box5.onclick = function () {
        boxClicked(box5, 4);
    };
    box6.onclick = function () {
        boxClicked(box6, 5);
    };
    box7.onclick = function () {
        boxClicked(box7, 6);
    };
    box8.onclick = function () {
        boxClicked(box8, 7);
    };
    box9.onclick = function () {
        boxClicked(box9, 8);
    };

    let gameState = ["", "", "", "", "", "", "", "", ""];

    function boxClicked(box, index) {
        if (gameState[index] === "" && gameIsGoing) {
            gameState[index] = currentPlayer;
            box.innerText = currentPlayer;
            checkIfWon();
        }
    }


    function checkIfWon() {

        let winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];


        for (let i = 0; i < winConditions.length; i++) {
            let condition = winConditions[i];
            if (gameState[condition[0]] === currentPlayer &&
                gameState[condition[1]] === currentPlayer &&
                gameState[condition[2]] === currentPlayer) {
                setTimeout(function () {
                    alert(currentPlayer + ' wins!');
                    gameIsGoing = false;
                }, 200);
                return;
            }
        }

        let boardFull = true;
        for (let j = 0; j < gameState.length; j++) {
            if (gameState[j] === "") {
                boardFull = false;
                break;
            }
        }

        if (boardFull) {
            alert('Tie game!');
            gameIsGoing = false;
            return;
        }

        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
    }

    function resetGame() {
        gameState = ["", "", "", "", "", "", "", "", ""];
        gameIsGoing = true;
        currentPlayer = 'X';

        box1.innerText = "";
        box2.innerText = "";
        box3.innerText = "";
        box4.innerText = "";
        box5.innerText = "";
        box6.innerText = "";
        box7.innerText = "";
        box8.innerText = "";
        box9.innerText = "";
    }

    let resetButton = document.getElementById('resetButton');

    resetButton.addEventListener('click', function () {
        resetGame();
    });

    function resetGame() {

        gameState = ["", "", "", "", "", "", "", "", ""];
        gameIsGoing = true;
        currentPlayer = 'X';

        [box1, box2, box3, box4, box5, box6, box7, box8, box9].forEach(box => {
            box.innerText = "";
        });
    }
});