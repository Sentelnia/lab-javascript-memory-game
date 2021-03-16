const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];





const memoryGame = new MemoryGame(cards);



window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;







  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      //on retroune la carte
      card.classList.toggle('turned')
      
      setTimeout(function(){
        //on l'ajoute dans l'array pickedCard
        memoryGame.pickedCards.push(card);

        //si cette array contien 2 elements
        if (memoryGame.pickedCards.length === 2){
        let card1 = memoryGame.pickedCards[0].dataset.cardName;
        let card2 = memoryGame.pickedCards[1].dataset.cardName;
        let result = memoryGame.checkIfPair(card1, card2)  

        //on change la classs selon le resultat de checkIfPair (si c true , turned reste, sinon turned s'en va)
        card.classList.toggle('turned', result);
        memoryGame.pickedCards[0].classList.toggle('turned', result);

       //on vide l'array 
        memoryGame.pickedCards.length = 0;
        };
        }, 1000);
      
    console.log(`Card clicked: ${card.dataset.cardName}`);

    //on change le pairclicked
    let pairClicked = document.getElementById('pairs-clicked');
    let pairsGuessed = document.getElementById('pairs-guessed');
    pairClicked.innerHTML = memoryGame.pairsClicked;
    pairsGuessed.innerHTML = memoryGame.pairsGuessed;


    //on vérifie si la partie est finie
    if (memoryGame.isFinished()){
      console.log('You win!!!');
    };
    });
  });
      
});


