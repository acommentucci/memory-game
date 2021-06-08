//cards
let cardArray = [
    {
        name: 'Arthricia',
        img: './assets/img/Cards/Arthricia_end_HQ.jpg',
    },
    {
        name: 'Arthricia',
        img: './assets/img/Cards/Arthricia_end_HQ.jpg',
    },
    {
        name: 'Birdperson',
        img: './assets/img/Cards/Birdperson_level_hard.jpg',
    },
    {
        name: 'Birdperson',
        img: './assets/img/Cards/Birdperson_level_hard.jpg',
    },
    {
        name: 'Butterbot',
        img: './assets/img/Cards/Butter_Robot_Picture.jpg',
    },
    {
        name: 'Butterbot',
        img: './assets/img/Cards/Butter_Robot_Picture.jpg',
    },
    {
        name: 'Dr.Wong',
        img: './assets/img/Cards/Dr._Wong.jpg',
    },
    {
        name: 'Dr.Wong',
        img: './assets/img/Cards/Dr._Wong.jpg',
    },
    {
        name: 'Tammy',
        img: './assets/img/Cards/Fed_Tammy.jpg',
    },
    {
        name: 'Tammy',
        img: './assets/img/Cards/Fed_Tammy.jpg',
    },
    {
        name: 'Glaxo',
        img: './assets/img/Cards/Glaxo.jpg',
    },
    {
        name: 'Glaxo',
        img: './assets/img/Cards/Glaxo.jpg',
    },
    {
        name: 'Grom',
        img: './assets/img/Cards/Gromflomite_3.jpg',
    },
    {
        name: 'Grom',
        img: './assets/img/Cards/Gromflomite_3.jpg',
    },
    {
        name: 'Jaguar',
        img: './assets/img/Cards/Jaguar1.jpg',
    },
    {
        name: 'Jaguar',
        img: './assets/img/Cards/Jaguar1.jpg',
    },
    {
        name: 'Jessica',
        img: './assets/img/Cards/Jessica.jpg',
    },
    {
        name: 'Jessica',
        img: './assets/img/Cards/Jessica.jpg',
    },
    {
        name: 'Linconer',
        img: './assets/img/Cards/Linconer.jpg',
    },
    {
        name: 'Linconer',
        img: './assets/img/Cards/Linconer.jpg',
    },
]

const grid = document.querySelector('.grid')
let cardsChosen = []
let cardsWon = []
let board = []

// Get the modal
let howToModal = document.getElementById("how-to-modal");
let startModal = document.getElementById("start-modal");

// Get the button that opens the modal
let howToBtn = document.getElementById("button-how-to");
let startBtn = document.getElementById("button-start");

// Get the <span> element that closes the modal
let quitHowTo = document.getElementsByClassName("closeHowTo")[0];
let quitStart = document.getElementsByClassName("closeStart")[0];
let quitGame = document.getElementsByClassName("closeGame")[0];
let quitCongrats = document.getElementsByClassName("closeCongrats")[0];



//game 
let gameModal = document.getElementById("game-modal");
let congratsModal = document.getElementById("congrats-modal");

//choose level
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");


// Get the span tag for the timer.
const timeCounter = document.querySelector(".timer");
// To use this variable to stop the time started in timer
let time;
// Create variables for time count, start all at zero
let minutes = 0;
let seconds = 0;
// For use in the click card event listener
let timeStart = false;

/*
Update the timer in the HTML for minutes and seconds
This timer() function is invoked in the event listener
on the first card click
Used: https://www.w3schools.com/js/js_timing.asp
*/
function timer() {
	// Update the count every 1 second
	time = setInterval(function() {
		seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
		// Update the timer in HTML with the time it takes the user to play the game
		timeCounter.innerHTML = minutes + " Mins " + seconds + " Secs" ;
	}, 1000);
}

/*
Stop the timer once the user has matched
all 16 cards, total of 8 pairs
Used: https://www.w3schools.com/js/js_timing.asp
*/
function stopTime() {
	clearInterval(time);
}

/*
Reset all global variables and the content of HTML elements
timer, stars, moves, and the moves and timer inner HTML
*/
function resetEverything() {
	// Stop time, reset the minutes and seconds update the time inner HTML
	stopTime();
	timeStart = false;
	seconds = 0;
	minutes = 0;
	timeCounter.innerHTML = "0 Mins 0 Secs";

}


function chooseLevel() {
    easy.addEventListener("click", easyGame);
    medium.addEventListener("click", mediumGame)
    hard.addEventListener("click", hardGame)
}

function easyGame() {
    createLevelBoard(8)
}

function mediumGame() {
    createLevelBoard(4)
}

function hardGame() {
    createLevelBoard(0)
}

function createLevelBoard(size) {
    cardsChosen = []
    cardsWon = []
    board = cardArray.slice(size)
    gameModal.style.display = "block";
    startModal.style.display = "none";
    board.sort(() => 0.5 - Math.random())
    createBoard(board)
}

//create the board
function createBoard(array) {
    grid.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', './assets/img/Cards/back_face_cards.jpg')
        card.setAttribute('data-id', i)
        card.setAttribute('class', 'cards')
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
    if (timeStart === false) {
        timeStart = true; 
        timer();
    }
}

// //check for match
function checkForMatch() {
    let firstCard = cardsChosen[0]
    let secondCard = cardsChosen[1]

    if (firstCard.arrayElement.name === secondCard.arrayElement.name) {
        firstCard.element.style.visibility = 'hidden'
        secondCard.element.style.visibility = 'hidden'
        cardsWon.push(cardsChosen)

        let idx = board.findIndex((element) => element == firstCard.arrayElement)

        delete board[idx]

        idx = board.findIndex((element) => element == secondCard.arrayElement)
        delete board[idx]

    } else {
        firstCard.element.setAttribute('src', './assets/img/Cards/back_face_cards.jpg')
        secondCard.element.setAttribute('src', './assets/img/Cards/back_face_cards.jpg')
    }
    cardsChosen = []
    
    if (new Set(board).size == 1) {
        gameModal.style.display = "none";
        congratsModal.style.display = "initial";
        document.getElementById("time-record").innerHTML = timeCounter.innerHTML;
        stopTime();
        resetEverything();
        resetGame();
    }
}
// flipcard
function flipCard() {
    let cardId = this.getAttribute('data-id')
    if (this.getAttribute('src') == './assets/img/Cards/back_face_cards.jpg') {
        cardsChosen.push({ element: this, arrayElement: board[cardId] })
        this.setAttribute('src', board[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 1000)
        }
    }
}

//reset game
function resetGame() {
    chooseLevel()
    resetEverything();
}




// When the user clicks the button, open the modal 
howToBtn.onclick = function () {
    howToModal.style.display = "block";
}
startBtn.onclick = function () {
    startModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
quitHowTo.onclick = function () {
    howToModal.style.display = "none";
    resetGame()
}
quitStart.onclick = function () {
    startModal.style.display = "none";
    resetGame()
}
quitGame.onclick = function () {
    gameModal.style.display = "none";
    resetGame()
}
quitCongrats.onclick = function () {
    congratsModal.style.display = "none";
    resetGame()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == howToModal) {
        howToModal.style.display = "none";
        resetGame()
    }
    if (event.target == startModal) {
        startModal.style.display = "none";
        resetGame()
    }
    if (event.target == gameModal) {
        gameModal.style.display = "none";
        resetGame()
    }
    if (event.target == congratsModal) {
        congratsModal.style.display = "none";
        resetGame()
    }
}


chooseLevel()