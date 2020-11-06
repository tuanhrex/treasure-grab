function rePaint() {
    // clear the entire canvas
    ctx.clearRect(0, 0, game.width, game.height);

    if (gameStatus === false || time === 0) {
        clearInterval(timeRemaining);
        clearInterval(rePaint);
        status.textContent = `Click to start again`
        
    } else if (gameStatus === true && time > 0) {
        
        ctx.drawImage(mazeImage, 0, 0, game.width, game.height)
        ctx.drawImage(lebron, lebronX, lebronY, 20, 26);
        if (diamondOneAlive === true) {
            ctx.drawImage(diamondOne, 332, 122, 20, 20);
            // ctx.drawImage(diamondOne, 2, 152, 20, 20);

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

        
        detectHit()
    }
}
