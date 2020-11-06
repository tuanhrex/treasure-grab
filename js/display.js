const game = document.querySelector('#game')

const computedStyle = getComputedStyle(game)

const height = computedStyle.height;
const width = computedStyle.width;

game.height = parseInt(height);
game.width = parseInt(width);

const ctx = game.getContext('2d');

let gameStatus = false; 


const status = document.getElementById('status');

class Maze {
    constructor(xOne, yOne, xTwo, yTwo) {
        this.xOne = xOne
        this.yOne = yOne
        this.xTwo = xTwo
        this.yTwo = yTwo
    }
    render() {
        ctx.moveTo(this.xOne, this.yOne);
        ctx.lineTo(this.xTwo, this.yTwo);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    }
}

const lineOne = new Maze (0, 90, 30, 90);
const lineTwo = new Maze (30, 30, 90, 30);
const lineThree = new Maze (30, 60, 60, 60);
const lineFour = new Maze (30, 150, 90, 150);
const lineFive = new Maze (30, 180, 120, 180);
const lineSix = new Maze (30, 240, 60, 240);
const lineSeven = new Maze (30, 270, 60, 270);
const lineEight = new Maze (30, 330, 90, 330);
const lineNine = new Maze (30, 120, 30, 180);
const lineTen = new Maze (30, 210, 30, 240);
const lineEleven = new Maze (30, 270, 30, 330);
const lineTwelve = new Maze (60, 120, 120, 120);
const lineThirteen = new Maze (60, 210, 150, 210);
const lineFourteen = new Maze (60, 300, 90, 300);
const lineFifteen = new Maze (60, 60, 60, 120);
const lineSixteen = new Maze (60, 240, 60, 270);
const lineSeventeen = new Maze (90, 90, 150, 90);
const lineEighteen = new Maze (90, 270, 120, 270);
const lineNineteen = new Maze (90, 30, 90, 90);
const lineTwenty = new Maze (90, 210, 90, 330);
const lineTwentyOne = new Maze (120, 240, 180, 240);
const lineTwentyTwo = new Maze (120, 300, 150, 300);
const lineTwentyThree = new Maze (120, 0, 120, 60);
const lineTwentyFour = new Maze (120, 90, 120, 180);
const lineTwentyFive = new Maze (120, 240, 120, 270);
const lineTwentySix = new Maze (120, 300, 120, 330);
const lineTwentySeven = new Maze (150, 60, 210, 60);
const lineTwentyEight = new Maze (150, 270, 210, 270);
const lineTwentyNine = new Maze (150, 0, 150, 30);
const lineThirty = new Maze (150, 60, 150, 150);
const lineThirtyOne = new Maze (150, 180, 150, 210);
const lineThirtyTwo = new Maze (150, 270, 150, 360);
const lineThirtyThree = new Maze (180, 30, 270, 30);
const lineThirtyFour = new Maze (180, 180, 210, 180);
const lineThirtyFive = new Maze (180, 330, 240, 330);
const lineThirtySix = new Maze (180, 90, 180, 240);
const lineThirtySeven = new Maze ( 180, 300, 180, 330);
const lineThirtyEight = new Maze (210, 150, 240, 150);
const lineThirtyNine = new Maze (210, 30, 210, 150);
const lineForty = new Maze (210, 180, 210, 300);
const lineFortyOne = new Maze (240, 60, 270, 60);
const lineFortyTwo = new Maze (240, 120, 270, 120);
const lineFortyThree = new Maze (240, 240, 300, 240);
const lineFortyFour = new Maze (240, 270, 300, 270);
const lineFortyFive = new Maze (240, 60, 240, 120);
const lineFortySix = new Maze (240, 150, 240, 240);
const lineFortySeven = new Maze (240, 270, 240, 330);
const lineFortyEight = new Maze (270, 90, 300, 90);
const lineFortyNine = new Maze (270, 180, 330, 180);
const lineFifty = new Maze (270, 30, 270, 60);
const lineFiftyOne = new Maze (270, 90, 270, 150);
const lineFiftyTwo = new Maze (270, 180, 270, 210);
const lineFiftyThree = new Maze (270, 300, 270, 360);
const lineFiftyFour = new Maze (300, 120, 360, 120);
const lineFiftyFive = new Maze (300, 330, 390, 330);
const lineFiftySix = new Maze (300, 0, 300, 90);
const lineFiftySeven = new Maze (300, 120, 300, 150);
const lineFiftyEight = new Maze (300, 180, 300, 240);
const lineFiftyNine = new Maze (300, 270, 300, 330);
const lineSixty = new Maze (330, 30, 420, 30);
const lineSixtyOne = new Maze (330, 150, 360, 150);
const lineSixtyTwo = new Maze (330, 270, 390, 270);
const lineSixtyThree = new Maze (330, 30, 330, 120);
const lineSixtyFour = new Maze (330, 150, 330, 180);
const lineSixtyFive = new Maze (330, 210, 330, 300);
const lineSixtySix = new Maze (360, 60, 390, 60);
const lineSixtySeven = new Maze (360, 90,420, 90);
const lineSixtyEight= new Maze (360, 180, 390, 180);
const lineSixtyNine = new Maze (360, 300, 420, 300);
const lineSeventy = new Maze (360, 30, 360, 60);
const lineSeventyOne = new Maze (360, 90, 360, 150);
const lineSeventyTwo = new Maze (360, 180, 360, 240);
const lineSeventyThree = new Maze (360, 300, 360, 330);
const lineSeventyFour = new Maze (390, 120, 420, 120);
const lineSeventyFive = new Maze(390, 150, 420, 150);
const lineSeventySix = new Maze (390, 210, 420, 210);
const lineSeventySeven = new Maze (390, 240, 480, 240);
const lineSeventyEight = new Maze (390, 180, 390, 300);
const lineSeventyNine = new Maze (420, 180, 450, 180);
const lineEighty = new Maze (420, 270, 450, 270);
const lineEightyOne = new Maze (420, 30, 420, 60);
const lineEightyTwo = new Maze (420, 90, 420, 120);
const lineEightyThree = new Maze (420, 150, 420, 180);
const lineEightyFour = new Maze (420, 240, 420, 270);
const lineEightyFive = new Maze (420, 300, 420, 360);
const lineEightySix = new Maze (450, 60, 570, 60);
const lineEightySeven = new Maze (450, 150, 540, 150);
const lineEightyEight = new Maze (450, 210, 540, 210);
const lineEightyNine = new Maze (450, 300, 480, 300);
const lineNinety = new Maze (450, 0, 450, 30);
const lineNinetyOne = new Maze (450, 60, 450, 120);
const lineNinetyTwo = new Maze (450, 180, 450, 210);
const lineNinetyThree = new Maze (450, 300, 450, 360);
const lineNinetyFour = new Maze (480, 30, 510, 30);
const lineNinetyFive = new Maze (480, 90, 570, 90);
const lineNinetySix = new Maze (480, 120, 540, 120);
const lineNinetySeven = new Maze (480, 270, 540, 270);
const lineNinetyEight = new Maze (480, 330, 510, 330);
const lineNinetyNine = new Maze (480, 30, 480, 60);
const lineOneHundred = new Maze (480, 150, 480, 180);
const lineOneHundredOne = new Maze (480, 270, 480, 300);
const lineOneHundredTwo = new Maze (510, 240, 540, 240);
const lineOneHundredThree = new Maze (510, 300, 600, 300);
const lineOneHundredFour = new Maze (510, 0, 510, 30);
const lineOneHundredFive = new Maze (510, 180, 510, 240);
const lineOneHundredSix = new Maze (510, 300, 510, 330);
const lineOneHundredSeven = new Maze (540, 30, 600, 30);
const lineOneHundredEight = new Maze (540, 180, 600, 180);
const lineOneHundredNine = new Maze (540, 330, 570, 330);
const lineOneTen = new Maze (540, 30, 540, 60);
const lineOneEleven = new Maze (540, 120, 540, 180);
const lineOneTwelve = new Maze (540, 240, 540, 270);
const lineOneThirteen = new Maze (540, 330, 540, 360);
const lineOneFourteen = new Maze (570, 150, 690, 150);
const lineOneFifteen = new Maze (570, 90, 570, 150);
const lineOneSixteen = new Maze (570, 210, 570, 300);
const lineOneSeventeen = new Maze (600, 120, 690, 120);
const lineOneEighteen = new Maze (600, 210, 660, 210);
const lineOneNineteen = new Maze (600, 270, 630, 270);
const lineOneTwenty = new Maze (600, 330, 630, 330);
const lineOneTwentyOne = new Maze (600, 30, 600, 120);
const lineOneTwentyTwo = new Maze (600, 210, 600, 330);
const lineOneTwentyThree = new Maze (630, 90, 660, 90);
const lineOneTwentyFour = new Maze (630, 180, 690, 180);
const lineOneTwentyFive = new Maze (630, 240, 660, 240);
const lineOneTwentySix = new Maze (630, 0, 630, 90);
const lineOneTwentySeven = new Maze (630, 150, 630, 180);
const lineOneTwentyEight = new Maze (630, 300, 630, 360);
const lineOneTwentyNine = new Maze (660, 30, 690, 30);
const lineOneThirty = new Maze (660, 270, 750, 270);
const lineOneThirtyOne = new Maze (660, 330, 690, 330);
const lineOneThirtyTwo = new Maze (660, 30, 660, 90);
const lineOneThirtyThree = new Maze (660, 210, 660, 270);
const lineOneThirtyFour = new Maze (660, 300, 660, 330);
const lineOneThirtyFive = new Maze (690, 210, 720, 210);
const lineOneThirtySix = new Maze (690, 240, 720, 240);
const lineOneThirtySeven = new Maze (690, 300, 750, 300);
const lineOneThirtyEight = new Maze (690, 60, 690, 120);
const lineOneThirtyNine = new Maze (690, 180, 690, 210);
const lineOneForty = new Maze (690, 240, 690, 270);
const lineOneFortyOne = new Maze (690, 300, 690,330);
const lineOneFortyTwo = new Maze (720, 30, 810, 30);
const lineOneFortyThree = new Maze (720, 180, 810, 180);
const lineOneFortyFour = new Maze (720, 30, 720, 60);
const lineOneFortyFive = new Maze (720, 90, 720, 180);
const lineOneFortySix = new Maze (720, 330, 720, 360);
const lineOneFortySeven = new Maze (750, 60, 780, 60);
const lineOneFortyEight = new Maze (750, 120, 780, 120);
const lineOneFortyNine = new Maze (750, 150, 810, 150);
const lineOneFifty = new Maze (750, 210, 810, 210);
const lineOneFiftyOne = new Maze (750, 240, 780, 240);
const lineOneFiftyTwo = new Maze (750, 330, 810, 330);
const lineOneFiftyThree = new Maze (750, 60, 750, 90);
const lineOneFiftyFour = new Maze (750, 120, 750, 150);
const lineOneFiftyFive = new Maze (750, 210, 750, 240);
const lineOneFiftySix = new Maze (750, 300, 750, 330);
const lineOneFiftySeven = new Maze (780, 60, 780, 120);
const lineOneFiftyEight = new Maze (780, 240, 780, 300);



const mazeImage = new Image ();
mazeImage.src = 'img/maze2.png';



const diamondOne = new Image();
diamondOne.src = 'img/diamond2.jpg';
let diamondOneAlive = false;

const diamondTwo = new Image();
diamondTwo.src = 'img/diamond2.jpg';
let diamondTwoAlive = false;

const diamondThree = new Image();
diamondThree.src = 'img/diamond2.jpg';
let diamondThreeAlive = false;

const diamondFour = new Image();
diamondFour.src = 'img/diamond2.jpg';
let diamondFourAlive = false;

const diamondFive = new Image();
diamondFive.src = 'img/diamond2.jpg';
let diamondFiveAlive = false;

let lebronX = 2;
let lebronY = 182;
const lebron = new Image();
lebron.src = 'img/lebron.png';





