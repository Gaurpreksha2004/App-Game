let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

let tomatoSound = new Audio('audio/tomato.mp3');
let grapesSound = new Audio('audio/angoor.mp3');



window.onload = function() {
    setGame();
}

document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay to hide the loader after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        // Hide the loader after 3 seconds
        document.querySelector('.loading').classList.add('loaded');
        setGame(); // Call setGame after the loader is hidden
    }, 3000);
});
function setGame() {
    //set up the grid in html
    for (let i = 0; i < 6; i++) { //i goes from 0 to 8, stops at 9
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 3000); 
    setInterval(setPlant, 4000); 
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 6);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "image/tomato-img.png";
    mole.addEventListener("click", playTomatoSound);

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "image/grape.png";
    plant.addEventListener("click", playGrapesSound);

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

function playTomatoSound() {
    tomatoSound.play();
}

function playGrapesSound() {
    grapesSound.play();
}