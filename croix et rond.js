var player = "X";
var gameState = ["", "", "", "", "", "", "", "", ""];

function addSign(cellId) {
    if (gameState[cellId - 1] === "") {
        gameState[cellId - 1] = player;
        document.getElementById("cell" + cellId).textContent = player;
        if (player === "X") {
            document.getElementById("cell" + cellId).classList.add("red");
        } else {
            document.getElementById("cell" + cellId).classList.add("blue");
        }
        player = player === "X" ? "O" : "X";
        checkWin();
    }
}

function checkWin() {
    var lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < lines.length; i++) {
        var a = lines[i][0];
        var b = lines[i][1];
        var c = lines[i][2];

        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            alert(gameState[a] + " a gagne!");
            resetGame();
        }
    }
}

function resetGame() {
    player = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    for (var i = 1; i <= 9; i++) {
        document.getElementById("cell" + i).textContent = "";
        document.getElementById("cell" + i).classList.remove("red");
        document.getElementById("cell" + i).classList.remove("blue");
    }
}