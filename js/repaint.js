function rePaint() {
    
    ctx.clearRect(0, 0, game.width, game.height);
    if (gameStatus === false && diamondFiveAlive === false && diamondFourAlive === false && diamondThreeAlive === false && diamondTwoAlive === false && diamondOneAlive === false) {
      
        turnOff();
        clearInterval(rePaint);
        status.textContent = `You Win! Click to start again`
        
    } 

    else if (gameStatus === false || time === -1) {
      
        turnOff();
        clearInterval(rePaint);
        status.textContent = `Game Over! Click to start again`
        
    } else if (gameStatus === true && time > -1) {
        
        ctx.drawImage(mazeImage, 0, 0, game.width, game.height)
        ctx.drawImage(lebron, lebronX, lebronY, 20, 26);
        if (diamondOneAlive === true) {
            ctx.drawImage(diamondOne, 332, 122, 20, 20);
            

        } 
        if (diamondTwoAlive === true) {
            ctx.drawImage(diamondTwo, 482, 32, 20, 20);

        }
        if (diamondThreeAlive === true) {
            ctx.drawImage(diamondThree, 362, 302, 20, 20);

        } 
        if (diamondFourAlive === true) {
            ctx.drawImage(diamondFour, 602, 332, 20, 20);

        }
        if (diamondFiveAlive === true) {
            ctx.drawImage(diamondFive, 752, 122, 20, 20);

        }

        diamondCount();
        detectHit()
    }
}

let time = 300;


var timer;
var turnOn = function() {
    timer = setInterval(function() {
        const timeRemaining = document.getElementById('timer');
        timeRemaining.textContent = `Time Remaining: ${time}`;
        time -= 1;
    }, 1000)
}
var turnOff = function() {
    clearInterval(timer);
}


function diamondCount() {
    if (diamondOneAlive === false && diamondTwoAlive === false && diamondThreeAlive === false && diamondFourAlive === false && diamondFiveAlive === false) {
        // status.textContent = "Got them all, click to start again!";
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