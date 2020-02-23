(function(){
    "use strict";

    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const score = document.getElementById("score");
    const actionArea = document.getElementById("actions");

    const gameData = {
        dice : ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png"],
        players : ["Annie", "Jennie", "Lisa"],
        score : [0,0,0],
        roll1 : 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 20
    }


    startGame.addEventListener("click", function(){
        // randomly set game index here...
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });
        //console.log(gameData.index);
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener("click", function(){

            throwDice()

        });
        checkWinningCondition();
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.ceil(Math.random()*6);
        gameData.roll2 = Math.ceil(Math.random()*6);
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if the sum of your dice totals to 2 or 4, you get 5 points...
        if( gameData.rollSum === 2 || gameData.rollSum === 4){
            game.innerHTML = "<p>You get 5 points for scoring a total of 2 or 4 :)</p>";
            gameData.score[gameData.index] = 5;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        // if either die is less than 2...
        else if(gameData.roll1 < 2 || gameData.roll2 < 2){
            gameData.index ? (gameData.index = 0) : (gameData.index = 2);
            game.innerHTML += `<p>Your turn is over, it is now ${gameData.players[gameData.index]}'s turn</p>`;
            setTimeout(setUpTurn, 2000);
        }

        // if neither die is a 1...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener("click", function(){
                throwDice();
            });

            document.getElementById('pass').addEventListener("click", function(){
                gameData.index ? gameData.index = 0 : gameData.index = 1;
                setUpTurn();
            });

            checkWinningCondition();
            }
        }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else{
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]} and <strong>${gameData.players[2]}: ${gameData.score[2]}</p>`;
    }
}());
