document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'orange',
            img:'images/orange.png'
        }, 
        {
            name: 'orange',
            img:'images/orange.png'
        }, 
        {
            name: 'bear',
            img:'images/bear.png'
        }, 
        {
            name: 'bear',
            img:'images/bear.png'
        }, 
        {
            name: 'bottle',
            img:'images/bottle.png'
        },   
        {
            name: 'bottle',
            img:'images/bottle.png'
        }, 
        {
            name: 'pop',
            img:'images/pop.png'
        },   
        {
            name: 'pop',
            img:'images/pop.png'
        }, 
        {
            name: 'riceball',
            img:'images/riceball.png'
        },   
        {
            name: 'riceball',
            img:'images/riceball.png'
        }, 
        {
            name: 'watermellon',
            img:'images/watermellon.png'
        },   
        {
            name: 'watermellon',
            img:'images/watermellon.png'
        }, 
       
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
    //create game board 
    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        } 
        
    }
    
    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            console.log(cardsWon)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            alert('Try again')
            
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }

    }

    //flip the card 
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()
})

