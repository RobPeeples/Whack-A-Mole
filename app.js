let gameState = {
    grid: [
       { 
        isCivilian: false,
        isUp: true,
       },
       { 
        isCivilian: true,
        isUp: true,
       },
       { 
        isCivilian: false,
        isUp: true,
       },
       { 
        isCivilian: false,
        isUp: true,
       },
       { 
        isCivilian: true,
        isUp: true,
       },
       { 
        isCivilian: false,
        isUp: true,
       },
       { 
        isCivilian: false,
        isUp: true,
       },
       { 
        isCivilian: true,
        isUp: true,
       },
       { 
        isCivilian: false,
        isUp: true,
       },
    ]
   }

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

//create a function to make a random time for mole to pop from the hole
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const index  = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    //prevent same hole from getting the same number
    if (hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function renderState() {
    const time = randomTime(500, 750); //get a random time to determine how long mole should peep
    const hole = randomHole(holes); //get the random hole from the randomHole function
    // let number = (Math.floor(Math.random() * gameState.grid.length)); //5 for ex.
    // let mole = gameState.grid[number];
    // if (mole.isCivilian === true && mole.isUp === true) {
    // hole.classList.add('up civilian');
        hole.classList.add('up'); //add the CSS class so selected mole can "pop up"
    // } else if (mole.isCivilian === false && mole.isUp === false) {
    //     hole.classList.add('up'); //add the CSS class so selected mole can "pop up"
    // };
    setTimeout(() => {
        hole.classList.remove('up'); //make the selected mole "pop down" after a random time
        if(!timeUp) {
            renderState();
        }
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    renderState();
    setTimeout(() => timeUp = true, 10000) //show random moles for 15 seconds
}

function wack(){
    scoreBoard.textContent = score;
    score++;
    $(this).removeClass('up'); //this refers to item clicked

}

moles.forEach(mole => mole.addEventListener('click', wack))