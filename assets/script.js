// Get the modal
let howToModal = document.getElementById("how-to-modal");
let startModal = document.getElementById("start-modal");

// Get the button that opens the modal
let howToBtn = document.getElementById("button-how-to");
let startBtn = document.getElementById("button-start");

// Get the <span> element that closes the modal
let quitHowTo = document.getElementsByClassName("closeHowTo")[0];
let quitStart = document.getElementsByClassName("closeStart")[0];

// When the user clicks the button, open the modal 
howToBtn.onclick = function() {
  howToModal.style.display = "block";
}
startBtn.onclick = function() {
    startModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
quitHowTo.onclick = function() {
    howToModal.style.display = "none";
}
quitStart.onclick = function() {
    startModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == howToModal) {
    howToModal.style.display = "none";
  }
  if (event.target == startModal) {
      startModal.style.display = "none";
    }
  if (event.target == gameModal) {
        gameModal.style.display = "none";
      }
}


//game 
let gameModal = document.getElementById("game-modal");

//choose level
let easy = document.getElementById("Jerry");

// When the user clicks the button, open the modal 
easy.onclick = function() {
    gameModal.style.display = "block";
    startModal.style.display = "none";
  }

//cards
const cardArray = [
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

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create the board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
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
    let cards = document.getElementsByClassName('cards')
    console.log(cards)
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].style.visibility('hidden')
        cards[optionTwoId].style.visibility('hidden')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', './assets/img/Cards/back_face_cards.jpg')
        cards[optionTwoId].setAttribute('src', './assets/img/Cards/back_face_cards.jpg')
        }
    cardsChosen = []
    cardsChosenId = []
    if (cardsWon.length === cardArray.lenght/2) {
        alert('Congratulations!')
    }    
}
// flipcard
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 1000)
    console.log(cardsChosen)
    console.log(cardsChosenId)
    console.log(cardsChosen.length)
    }
}




createBoard()