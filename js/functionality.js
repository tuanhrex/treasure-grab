


document.getElementById('status').addEventListener('click', function() {
 
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

  
    turnOn();
    rePaint();


    setInterval(rePaint, 1000/45)
    
})



