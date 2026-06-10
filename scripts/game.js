let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    choices: ['button1', 'button2', 'button3', 'button4'],
}


function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}
/**
 * Should display the value of game.score in the element with id score
*/
function showScore() {
    document.getElementById("score").innerText = game.score;
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light")
    }, 400)
}

/**
 * 1. Step through currentGame 
 * 2. Turn on the light
 * 3. Turn off the light
 */
function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800)
}

/**
 * сохранить выбор игрока playerMoves и сравнить с тем что показал компьютер currentGame.
 * 2. если выбор игрока совпадает (e.target.getAttribute("id", "circle" === currentGame)) то обновить game.score результат и показать новую последовательность от компьютера
 */
function playerTurn() {
    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length === game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    }
    else {
        alert("Wrong move!");
        newGame();
    }
}

/**
 * 
 * 1. Clear game.playerMoves array
 * 2. Randomly add a button to the game.currentGame array
 * 3. Call showTurns() function  
 * 
*/
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

module.exports = { game, newGame, showScore, addTurn, showTurns, lightsOn, playerTurn };