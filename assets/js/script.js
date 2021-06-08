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



//game 
let gameModal = document.getElementById("game-modal");

//choose level
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");




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
        alert('Congratulations!')
        gameModal.style.display = "none";
        resetGame()
    }
}
// flipcard
function flipCard() {
    let cardId = this.getAttribute('data-id')
    if (this.getAttribute('src') == './assets/img/Cards/back_face_cards.jpg') {
        cardsChosen.push({ element: this, arrayElement: board[cardId] })
        this.setAttribute('src', board[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 200)
        }
    }
}

//reset game
function resetGame() {
    chooseLevel()
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
}
quitStart.onclick = function () {
    startModal.style.display = "none";
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
}


chooseLevel()