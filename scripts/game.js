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
 * Should display 0 for the element with id score
 */
function showScore() {
    document.getElementById("score").innerText = game.score;
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
    // showTurns();
}

module.exports = { game, newGame, showScore, addTurn };