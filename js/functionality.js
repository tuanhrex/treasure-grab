let time = 300;
function timeRemaining() {
        if (gameStatus === true) {
            const timer = document.getElementById('timer');
            timer.textContent = `Time Remaining: ${time}`;
            time -= 1;
            diamondCount();

        } else {
            clearInterval(timeRemaining);
        }
    
}

function diamondCount() {
    if (diamondOneAlive === false && diamondTwoAlive === false && diamondThreeAlive === false && diamondFourAlive === false && diamondFiveAlive === false) {
        status.textContent = "5 diamonds obtained"
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

    // ctx.drawImage(lebron, lebronX, lebronY, 26, 26);
    // ctx.drawImage(diamondOne, 332, 122, 20, 20);
    // ctx.drawImage(diamondTwo, 482, 32, 20, 20);
    // ctx.drawImage(diamondThree, 362, 332, 20, 20);
    // ctx.drawImage(diamondFour, 602, 332, 20, 20);
    // ctx.drawImage(diamondFive, 752, 122, 20, 20);

    // lineOne.render();
    // lineTwo.render();
    // lineThree.render();
    // lineFour.render();
    // lineFive.render();
    // lineSix.render();
    // lineSeven.render();
    // lineEight.render();
    // lineNine.render();
    // lineTen.render();
    // lineEleven.render();
    // lineTwelve.render();
    // lineThirteen.render();
    // lineFourteen.render();
    // lineFifteen.render();
    // lineSixteen.render();
    // lineSeventeen.render();
    // lineEighteen.render();
    // lineNineteen.render();
    // lineTwenty.render();
    // lineTwentyOne.render();
    // lineTwentyTwo.render();
    // lineTwentyThree.render();
    // lineTwentyFour.render();
    // lineTwentyFive.render();
    // lineTwentySix.render();
    // lineTwentySeven.render();
    // lineTwentyEight.render();
    // lineTwentyNine.render();
    // lineThirty.render();
    // lineThirtyOne.render();
    // lineThirtyTwo.render();
    // lineThirtyThree.render();
    // lineThirtyFour.render();
    // lineThirtyFive.render();
    // lineThirtySix.render();
    // lineThirtySeven.render();
    // lineThirtyEight.render();
    // lineThirtyNine.render();
    // lineForty.render();
    // lineFortyOne.render();
    // lineFortyTwo.render();
    // lineFortyThree.render();
    // lineFortyFour.render();
    // lineFortyFive.render();
    // lineFortySix.render();
    // lineFortySeven.render();
    // lineFortyEight.render();
    // lineFortyNine.render();
    // lineFifty.render();
    // lineFiftyOne.render();
    // lineFiftyTwo.render();
    // lineFiftyThree.render();
    // lineFiftyFour.render();
    // lineFiftyFive.render();
    // lineFiftySix.render();
    // lineFiftySeven.render();
    // lineFiftyEight.render();
    // lineFiftyNine.render();
    // lineSixty.render();
    // lineSixtyOne.render();
    // lineSixtyTwo.render();
    // lineSixtyThree.render();
    // lineSixtyFour.render();
    // lineSixtyFive.render();
    // lineSixtySix.render();
    // lineSixtySeven.render();
    // lineSixtyEight.render();
    // lineSixtyNine.render();
    // lineSeventy.render();
    // lineSeventyOne.render();
    // lineSeventyTwo.render();
    // lineSeventyThree.render();
    // lineSeventyFour.render();
    // lineSeventyFive.render();
    // lineSeventySix.render();
    // lineSeventySeven.render();
    // lineSeventyEight.render();
    // lineSeventyNine.render();
    // lineEighty.render();
    // lineEightyOne.render();
    // lineEightyTwo.render();
    // lineEightyThree.render();
    // lineEightyFour.render();
    // lineEightyFive.render();
    // lineEightySix.render();
    // lineEightySeven.render();
    // lineEightyEight.render();
    // lineEightyNine.render();
    // lineNinety.render();
    // lineNinetyOne.render();
    // lineNinetyTwo.render();
    // lineNinetyThree.render();
    // lineNinetyFour.render();
    // lineNinetyFive.render();
    // lineNinetySix.render();
    // lineNinetySeven.render();
    // lineNinetyEight.render();
    // lineNinetyNine.render();
    // lineOneHundred.render();
    // lineOneHundredOne.render();
    // lineOneHundredTwo.render();
    // lineOneHundredThree.render();
    // lineOneHundredFour.render();
    // lineOneHundredFive.render();
    // lineOneHundredSix.render();
    // lineOneHundredSeven.render();
    // lineOneHundredEight.render();
    // lineOneHundredNine.render();
    // lineOneTen.render();
    // lineOneEleven.render();
    // lineOneTwelve.render();
    // lineOneThirteen.render();
    // lineOneFourteen.render();
    // lineOneFifteen.render();
    // lineOneSixteen.render();
    // lineOneSeventeen.render();
    // lineOneEighteen.render();
    // lineOneNineteen.render();
    // lineOneTwenty.render();
    // lineOneTwentyOne.render();
    // lineOneTwentyTwo.render();
    // lineOneTwentyThree.render();
    // lineOneTwentyFour.render();
    // lineOneTwentyFive.render();
    // lineOneTwentySix.render();
    // lineOneTwentySeven.render();
    // lineOneTwentyEight.render();
    // lineOneTwentyNine.render();
    // lineOneThirty.render();
    // lineOneThirtyOne.render();
    // lineOneThirtyTwo.render();
    // lineOneThirtyThree.render();
    // lineOneThirtyFour.render();
    // lineOneThirtyFive.render();
    // lineOneThirtySix.render();
    // lineOneThirtySeven.render();
    // lineOneThirtyEight.render();
    // lineOneThirtyNine.render();
    // lineOneForty.render();
    // lineOneFortyOne.render();
    // lineOneFortyTwo.render();
    // lineOneFortyThree.render();
    // lineOneFortyFour.render();
    // lineOneFortyFive.render();
    // lineOneFortySix.render();
    // lineOneFortySeven.render();
    // lineOneFortyEight.render();
    // lineOneFortyNine.render();
    // lineOneFifty.render();
    // lineOneFiftyOne.render();
    // lineOneFiftyTwo.render();
    // lineOneFiftyThree.render();
    // lineOneFiftyFour.render();
    // lineOneFiftyFive.render();
    // lineOneFiftySix.render();
    // lineOneFiftySeven.render();
    // lineOneFiftyEight.render();

    setInterval(rePaint, 1000/45)
    setInterval(timeRemaining, 1000)
    
})



