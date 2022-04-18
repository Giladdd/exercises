$(document).ready(function() {
    $("#submit").click(function() {
        checked = $("input[type=checkbox]:checked").length + 1;

        if (checked <= 2) {
            alert("You must check at least two checkbox.");
            return false;
        }
    });
});


var healthPoints = 100;
var myGunSound = new Audio("./includes/scar.mp3");

function newGame() {
    randomEnemyAttacks();
    document.querySelector("button").style.display = "none";
}

function updateHealthPoints(points) {

    healthPoints = points;
    var healthBar = document.querySelector("#healthBar");
    healthBar.style.width = points + "%";

    if (healthPoints < 1) {
        window.alert("Game over! Better luck next time(gg)!");
        window.location.reload();
    }

}


function livingEnemies() {
    return document.querySelectorAll(".enemy:not(.dead)");
}


function iShoot(enemy) {
    enemy.classList.add("dead");

    if (!livingEnemies().length) {
        alert("You win! (e)GG!");
        window.location.reload();
    }

}


function enemyAttacksMe(enemy) {

    if (healthPoints > 0) {

        enemy.classList.add("showing");

        setTimeout(() => {
            enemyShootsMe(enemy);
        }, 1000);

        setTimeout(() => {
            enemy.classList.remove("showing");
        }, 3000);

    }


}


function enemyShootsMe(enemy) {

    if (!enemy.classList.contains("dead")) {

        enemy.classList.add("shooting");
        updateHealthPoints(healthPoints - 20);

        setTimeout(() => {
            enemy.classList.remove("shooting");
        }, 200);

    }

}


function randomEnemyAttacks() {

    var randomEnemyNo = Math.random() * livingEnemies().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    var enemy = livingEnemies()[randomEnemyNo];

    var randomDelay = Math.random() * 2000 + 1000;

    setTimeout(() => {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);

}