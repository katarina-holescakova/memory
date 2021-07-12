document.addEventListener('DOMContentLoaded',()=>{

// card options
const cardArray=[
{
name:'bear',
img:'img/bear.png'
},
{
    name:'bear',
    img:'img/bear.png'
    },
{
    name:'beaver',
    img:'img/beaver.png'
},
{
    name:'beaver',
    img:'img/beaver.png'
},
{
    name:'bee',
    img:'img/bee.png'
},
{
    name:'bee',
    img:'img/bee.png'
},
{
    name:'bull',
    img:'img/bull.png'
},
{
    name:'bull',
    img:'img/bull.png'
},
{
    name:'crab',
    img:'img/crab.png'
},
{
    name:'crab',
    img:'img/crab.png'
},
{
    name:'crocodile',
    img:'img/crocodile.png'
}, 
{
    name:'crocodile',
    img:'img/crocodile.png'
},
{
    name:'wolf',
    img:'img/wolf.png'
},
{
    name:'wolf',
    img:'img/wolf.png'
},
{
    name:'whale',
    img:'img/whale.png'
},
{
    name:'whale',
    img:'img/whale.png'
},
{
    name:'turtle',
    img:'img/turtle.png'
},
{
    name:'turtle',
    img:'img/turtle.png'
},
{
    name:'tuna',
    img:'img/tuna.png'
},
{
    name:'tuna',
    img:'img/tuna.png'
},
{
    name:'tiger',
    img:'img/tiger.png'
},
{
    name:'tiger',
    img:'img/tiger.png'
},
{
    name:'duck',
    img:'img/duck.png'
},
{
    name:'duck',
    img:'img/duck.png'
}

]
cardArray.sort(()=>0.5 - Math.random())

const grid=document.querySelector('.grid')
const resultDisplay=document.querySelector('#result1')
var cardsChosen = []
var cardsChosenId=[]
var cardsWon=[]
// create board

function createBoard(){
    for (let i=0;i<cardArray.length;i++){
        var card=document.createElement('img')
        card.setAttribute('src','img/floral.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        // na click zavola flipcard
        grid.appendChild(card)

    }
}
// check for matches
function checkForMatch(){
    var cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenId[0]
    const optionTwoId=cardsChosenId[1]
    if(cardsChosen[0]===cardsChosen[1]){
        document.getElementById('message').textContent='You found a match!'
        cards[optionOneId].style.visibility='hidden';
        cards[optionTwoId].style.visibility='hidden';
        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src','img/floral.png')
        cards[optionTwoId].setAttribute('src','img/floral.png')
        document.getElementById('message').textContent='Sorry, try again!'


    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent=cardsWon.length
    if(cardsWon.length===cardArray.length/2){
        resultDisplay.textContent='Congratulations! You found them all! '
    }
}


// flip your card
function flipCard(){
    var cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch,700)
    }
}

createBoard()

});