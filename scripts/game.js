let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
}


function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
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

/**
 * The showTurns() function and player clicks should cause the circle to change
 * colour or to light up.   
 */
function showTurns() {

}

module.exports = { game, newGame, showScore, addTurn, showTurns, lightsOn };