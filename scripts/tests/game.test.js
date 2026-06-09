/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore, addTurn, showTurns, lightsOn } = require('../game');

beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.body.innerHTML = fileContents;
});

describe('game object contains correct keys', () => {
    test('score key exists', () => {
        expect('score' in game).toBe(true);
    });
    test('currentGame key exists', () => {
        expect('currentGame' in game).toBe(true);
    });
    test('playerMoves key exists', () => {
        expect('playerMoves' in game).toBe(true);
    });
    test('choices contains correct ids', () => {
        expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4']);
    });
});

describe('newGame() function', () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ['button3', 'button1'];
        game.currentGame = ['button4', 'button2'];
        document.getElementById("score").innerText = "42";
        newGame();
    });

    test('should set game score to zero', () => {
        expect(game.score).toEqual(0);
    });
    test('should be one element in the computer"s array', () => {
        expect(game.currentGame.length).toBe(1);
    });
    test('should clear the player moves array', () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test('should display 0 for the el with id of score', () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});

describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    })
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    })
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    test("should add correct class to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });
})