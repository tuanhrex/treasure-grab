function rePaint() {
    // clear the entire canvas
    ctx.clearRect(0, 0, game.width, game.height);

    if (gameStatus === false || time === 0) {
        clearInterval(rePaint);
        clearInterval(timeRemaining);
        status.textContent = `Click to start again`
        
    } else if (gameStatus === true && time > 0) {
        

        ctx.drawImage(lebron, lebronX, lebronY, 26, 26);
        if (diamondOneAlive === true) {
            // ctx.drawImage(diamondOne, 332, 122, 20, 20);
            ctx.drawImage(diamondOne, 2, 152, 20, 20);

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

        lineOne.render();
        lineTwo.render();
        lineThree.render();
        lineFour.render();
        lineFive.render();
        lineSix.render();
        lineSeven.render();
        lineEight.render();
        lineNine.render();
        lineTen.render();
        lineEleven.render();
        lineTwelve.render();
        lineThirteen.render();
        lineFourteen.render();
        lineFifteen.render();
        lineSixteen.render();
        lineSeventeen.render();
        lineEighteen.render();
        lineNineteen.render();
        lineTwenty.render();
        lineTwentyOne.render();
        lineTwentyTwo.render();
        lineTwentyThree.render();
        lineTwentyFour.render();
        lineTwentyFive.render();
        lineTwentySix.render();
        lineTwentySeven.render();
        lineTwentyEight.render();
        lineTwentyNine.render();
        lineThirty.render();
        lineThirtyOne.render();
        lineThirtyTwo.render();
        lineThirtyThree.render();
        lineThirtyFour.render();
        lineThirtyFive.render();
        lineThirtySix.render();
        lineThirtySeven.render();
        lineThirtyEight.render();
        lineThirtyNine.render();
        lineForty.render();
        lineFortyOne.render();
        lineFortyTwo.render();
        lineFortyThree.render();
        lineFortyFour.render();
        lineFortyFive.render();
        lineFortySix.render();
        lineFortySeven.render();
        lineFortyEight.render();
        lineFortyNine.render();
        lineFifty.render();
        lineFiftyOne.render();
        lineFiftyTwo.render();
        lineFiftyThree.render();
        lineFiftyFour.render();
        lineFiftyFive.render();
        lineFiftySix.render();
        lineFiftySeven.render();
        lineFiftyEight.render();
        lineFiftyNine.render();
        lineSixty.render();
        lineSixtyOne.render();
        lineSixtyTwo.render();
        lineSixtyThree.render();
        lineSixtyFour.render();
        lineSixtyFive.render();
        lineSixtySix.render();
        lineSixtySeven.render();
        lineSixtyEight.render();
        lineSixtyNine.render();
        lineSeventy.render();
        lineSeventyOne.render();
        lineSeventyTwo.render();
        lineSeventyThree.render();
        lineSeventyFour.render();
        lineSeventyFive.render();
        lineSeventySix.render();
        lineSeventySeven.render();
        lineSeventyEight.render();
        lineSeventyNine.render();
        lineEighty.render();
        lineEightyOne.render();
        lineEightyTwo.render();
        lineEightyThree.render();
        lineEightyFour.render();
        lineEightyFive.render();
        lineEightySix.render();
        lineEightySeven.render();
        lineEightyEight.render();
        lineEightyNine.render();
        lineNinety.render();
        lineNinetyOne.render();
        lineNinetyTwo.render();
        lineNinetyThree.render();
        lineNinetyFour.render();
        lineNinetyFive.render();
        lineNinetySix.render();
        lineNinetySeven.render();
        lineNinetyEight.render();
        lineNinetyNine.render();
        lineOneHundred.render();
        lineOneHundredOne.render();
        lineOneHundredTwo.render();
        lineOneHundredThree.render();
        lineOneHundredFour.render();
        lineOneHundredFive.render();
        lineOneHundredSix.render();
        lineOneHundredSeven.render();
        lineOneHundredEight.render();
        lineOneHundredNine.render();
        lineOneTen.render();
        lineOneEleven.render();
        lineOneTwelve.render();
        lineOneThirteen.render();
        lineOneFourteen.render();
        lineOneFifteen.render();
        lineOneSixteen.render();
        lineOneSeventeen.render();
        lineOneEighteen.render();
        lineOneNineteen.render();
        lineOneTwenty.render();
        lineOneTwentyOne.render();
        lineOneTwentyTwo.render();
        lineOneTwentyThree.render();
        lineOneTwentyFour.render();
        lineOneTwentyFive.render();
        lineOneTwentySix.render();
        lineOneTwentySeven.render();
        lineOneTwentyEight.render();
        lineOneTwentyNine.render();
        lineOneThirty.render();
        lineOneThirtyOne.render();
        lineOneThirtyTwo.render();
        lineOneThirtyThree.render();
        lineOneThirtyFour.render();
        lineOneThirtyFive.render();
        lineOneThirtySix.render();
        lineOneThirtySeven.render();
        lineOneThirtyEight.render();
        lineOneThirtyNine.render();
        lineOneForty.render();
        lineOneFortyOne.render();
        lineOneFortyTwo.render();
        lineOneFortyThree.render();
        lineOneFortyFour.render();
        lineOneFortyFive.render();
        lineOneFortySix.render();
        lineOneFortySeven.render();
        lineOneFortyEight.render();
        lineOneFortyNine.render();
        lineOneFifty.render();
        lineOneFiftyOne.render();
        lineOneFiftyTwo.render();
        lineOneFiftyThree.render();
        lineOneFiftyFour.render();
        lineOneFiftyFive.render();
        lineOneFiftySix.render();
        lineOneFiftySeven.render();
        lineOneFiftyEight.render();

        detectHit()
    }
}
