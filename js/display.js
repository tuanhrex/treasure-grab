const game = document.querySelector('#game')

const computedStyle = getComputedStyle(game)

const height = computedStyle.height;
const width = computedStyle.width;

game.height = parseInt(height);
game.width = parseInt(width);

const ctx = game.getContext('2d');


// function mazeRender() {
//     ctx.moveTo(0, 90);
//     ctx.lineTo(30, 90);
//     ctx.moveTo(30, 30);
//     ctx.lineTo(90, 30);
//     ctx.moveTo(30, 60);
//     ctx.lineTo(60, 60);
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = 'green';
//     ctx.stroke();

// }

// mazeRender();


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
        ctx.strokeStyle = 'green';
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
const lineEight = new Maze (30, 330, 60, 330);
const lineNine = new Maze (30, 120, 30, 180);
const lineTen = new Maze (30, 210, 30, 240);
const lineEleven = new Maze (30, 270, 30, 330);


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