let time = 300;
function timeRemaining() {
        if (gameStatus === true) {
            const timer = document.getElementById('timer');
            timer.textContent = `Time Remaining: ${time}`;
            time -= 1;
            diamondCount();

        } else if (gameStatus === false || time === 0) {
            gameStatus = false
            clearInterval(timeRemaining);
        }
    
}

function diamondCount() {
    if (diamondOneAlive === false && diamondTwoAlive === false && diamondThreeAlive === false && diamondFourAlive === false && diamondFiveAlive === false) {
        status.textContent = "Got them all, click to start again!";
        gameStatus = false;
        
    } else if ((diamondOneAlive === false && diamondTwoAlive === false && diamondThreeAlive === false && diamondFourAlive === false) || (diamondOneAlive === false && diamondTwoAlive === false && diamondThreeAlive === false && diamondFiveAlive === false) || (diamondOneAlive === false && diamondTwoAlive === false && diamondFourAlive === false && diamondFiveAlive === false) || (diamondOneAlive === false && diamondThreeAlive === false && diamondFourAlive === false && diamondFiveAlive === false) || (diamondTwoAlive === false && diamondThreeAlive === false && diamondFourAlive === false && diamondFiveAlive === false)) {
        status.textContent = "4 diamonds obtained"
    } else if ((diamondOneAlive === false && diamondTwoAlive === false && diamondThreeAlive === false) || (diamondOneAlive === false && diamondTwoAlive === false && diamondFourAlive === false) || (diamondOneAlive === false && diamondTwoAlive === false && diamondFiveAlive === false) || (diamondOneAlive === false && diamondThreeAlive === false && diamondFourAlive === false) || (diamondOneAlive === false && diamondThreeAlive === false && diamondFiveAlive === false) || (diamondOneAlive === false && diamondFourAlive === false && diamondFiveAlive === false) || (diamondTwoAlive === false && diamondThreeAlive === false && diamondFourAlive === false) || (diamondTwoAlive === false && diamondThreeAlive === false && diamondFiveAlive === false) || (diamondTwoAlive === false && diamondFourAlive === false && diamondFiveAlive === false) || (diamondThreeAlive === false && diamondFourAlive === false && diamondFiveAlive === false)) {
        status.textContent = "3 diamonds obtained"
    } else if ((diamondOneAlive === false && diamondTwoAlive === false) || (diamondOneAlive === false && diamondThreeAlive === false) || (diamondOneAlive === false && diamondFourAlive === false) || (diamondOneAlive === false && diamondFiveAlive === false) || (diamondTwoAlive === false && diamondThreeAlive === false) || (diamondTwoAlive === false && diamondFourAlive === false) || (diamondTwoAlive === false && diamondFiveAlive === false) || (diamondThreeAlive === false && diamondFourAlive === false) || (diamondThreeAlive === false && diamondFiveAlive === false) || (diamondFourAlive === false && diamondFiveAlive === false)) {
        status.textContent = "2 diamonds obtained"
    } else if (diamondOneAlive === false || diamondTwoAlive === false || diamondThreeAlive === false || diamondFourAlive === false || diamondFiveAlive === false) {
        status.textContent = "1 diamond obtained"
    }
}


document.getElementById('status').addEventListener('click', function() {
    clearInterval(timeRemaining);
    time = 300;
    gameStatus = true;
    diamondOneAlive = true;
    diamondTwoAlive = true;
    diamondThreeAlive = true;
    diamondFourAlive = true;
    diamondFiveAlive = true;
    lebronX = 2;
    lebronY = 182;
    
    status.textContent = `0 diamonds obtained`

  

    rePaint();


    setInterval(rePaint, 1000/45)
    setInterval(timeRemaining, 1000)
    
})



